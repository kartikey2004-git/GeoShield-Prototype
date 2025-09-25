"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Activity,
  User,
  Bell,
  Database,
  Key,
} from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "AI Alerts", href: "/ai-monitoring", icon: Bell },
    { name: "Dispatch Center", href: "/dispatch", icon: Activity },
    { name: "Tourist Profile", href: "/tourist-id", icon: User },
    { name: "Main Portal", href: "/main-portal", icon: Database },
    { name: "Blockchain ID", href: "/blockchain-id", icon: Key },
  ];

  return (
    <nav className="bg-white text-gray-900 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold text-gray-900">
            GeoShield
          </Link>

          {/* Desktop Menu (lg and above) */}
          <div className="hidden lg:flex space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-2 justify-center min-w-[140px] rounded-md transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        isActive ? "text-blue-700" : "text-gray-700"
                      }`}
                    />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile & Tablet Hamburger (below lg) */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-4 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-2 justify-start w-full rounded-md transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon
                  className={`h-4 w-4 ${
                    isActive ? "text-blue-700" : "text-gray-700"
                  }`}
                />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
