"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Shield,
  MapPin,
  AlertTriangle,
  Users,
  Phone,
  Camera,
  Wifi,
  Brain,
  QrCode,
} from "lucide-react";

import Link from "next/link";
import { EmergencyAlertButton } from "@/components/emergency-alert-button";
import { AIBehaviorTracker } from "@/components/ai-behaviour-tracker";
import { BlockchainVerifier } from "@/components/blockchain-verifier";

export default function Main() {
  const [safetyStatus, setSafetyStatus] = useState("safe");

  const [location, setLocation] = useState("Downtown Tourist District");

  const [isTracking, setIsTracking] = useState(false);

  const toggleTracking = () => {
    setIsTracking(!isTracking);
    console.log("[v0] Location tracking toggled:", !isTracking);
  };

  const safetyColor = {
    safe: "bg-emerald-500",
    caution: "bg-amber-500",
    alert: "bg-red-500",
  };

  const safetyText = {
    safe: "Area Safe",
    caution: "Exercise Caution",
    alert: "Safety Alert Active",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  SafeTour
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Smart Tourist Safety
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${safetyColor[safetyStatus]}`}
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {safetyText[safetyStatus]}
                </span>
              </div>
              <div className="flex gap-2">
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    Authority Dashboard
                  </Button>
                </Link>
                <Link href="/dispatch">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    Dispatch Center
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Safety Status Alert */}
        {safetyStatus !== "safe" && (
          <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              {safetyStatus === "caution"
                ? "Increased security presence detected in your area. Stay alert and follow local guidelines."
                : "Emergency situation detected. Please follow evacuation instructions and contact authorities."}
            </AlertDescription>
          </Alert>
        )}

        {/* Current Location & Status */}
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Current Location
            </CardTitle>
            <CardDescription>
              Real-time location and safety monitoring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">
                  {location}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Last updated: 2 minutes ago
                </p>
              </div>
              <Badge
                variant={
                  safetyStatus === "safe"
                    ? "default"
                    : safetyStatus === "caution"
                    ? "secondary"
                    : "destructive"
                }
              >
                {safetyText[safetyStatus]}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant={isTracking ? "default" : "outline"}
                size="sm"
                onClick={toggleTracking}
                className="flex items-center gap-2"
              >
                <Wifi className="h-4 w-4" />
                {isTracking ? "Tracking Active" : "Enable Tracking"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent"
              >
                <Users className="h-4 w-4" />
                Find Nearby Tourists
              </Button>
              <Link href="/tourist-id">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-transparent"
                >
                  <QrCode className="h-4 w-4" />
                  Show ID
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Actions */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-400">
                Emergency Actions
              </CardTitle>
              <CardDescription>
                Quick access to emergency services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <EmergencyAlertButton />
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Police
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Camera className="h-4 w-4 mr-2" />
                  Report Incident
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">
                Safety Features
              </CardTitle>
              <CardDescription>AI-powered protection tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Behavior Analysis</span>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Geo-fence Monitoring
                  </span>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Blockchain ID</span>
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-600"
                  >
                    Verified
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href="/ai-monitoring" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    AI Monitor
                  </Button>
                </Link>
                <Link href="/blockchain-id" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Blockchain ID
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Behavior Tracking */}
        <AIBehaviorTracker />

        {/* Blockchain Verification */}
        <BlockchainVerifier touristId="TST-2024-001234" />

        {/* Recent Activity */}
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your safety monitoring history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Entered safe zone</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Downtown Tourist District - 15 min ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    ID verification completed
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Blockchain verification - 1 hour ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Behavior pattern analyzed
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    AI monitoring active - 2 hours ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
