"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, User, MapPin } from "lucide-react";

import { BsQrCode } from "react-icons/bs";

export function TouristIdCard({
  name,
  id,
  nationality,
  verificationStatus,
  issueDate,
  location,
}) {
  const statusColor = {
    verified: "bg-green-500",
    pending: "bg-amber-500",
    expired: "bg-red-500",
  };

  const statusText = {
    verified: "Verified",
    pending: "Pending",
    expired: "Expired",
  };

  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-blue-900 dark:text-blue-100">
            Tourist Safety ID
          </CardTitle>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${statusColor[verificationStatus]}`}
            />
            <Badge
              variant={
                verificationStatus === "verified" ? "default" : "secondary"
              }
            >
              {statusText[verificationStatus]}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-slate-600 dark:text-slate-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              {name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {nationality}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-600 dark:text-slate-400">ID Number</p>
            <p className="font-mono font-medium text-slate-900 dark:text-slate-100">
              {id}
            </p>
          </div>
          <div>
            <p className="text-slate-600 dark:text-slate-400">Issue Date</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {issueDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-slate-600" />
          <span className="text-slate-600 dark:text-slate-400">
            Current Location:
          </span>
          <span className="font-medium text-slate-900 dark:text-slate-100">
            {location}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Blockchain Secured
            </span>
          </div>
          <Button variant="outline" size="sm">
            <BsQrCode className="h-4 w-4 mr-2" />
            Show QR
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
