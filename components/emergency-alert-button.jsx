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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export function EmergencyAlertButton() {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [alertSent, setAlertSent] = useState(false);
  const [responseTime, setResponseTime] = useState("");

  const handleEmergencyAlert = async () => {
    setIsEmergencyActive(true);

    // Simulate emergency dispatch process
    setTimeout(() => {
      setAlertSent(true);
      setResponseTime("2-3 minutes");
    }, 2000);

    // Auto-reset after 30 seconds for demo
    setTimeout(() => {
      setIsEmergencyActive(false);
      setAlertSent(false);
      setResponseTime("");
    }, 30000);
  };

  if (isEmergencyActive) {
    return (
      <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="text-red-900 dark:text-red-100 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Emergency Alert Active
          </CardTitle>
          <CardDescription className="text-red-700 dark:text-red-300">
            Help is on the way
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!alertSent ? (
            <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
              <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
              <span>Dispatching emergency services...</span>
            </div>
          ) : (
            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                Emergency services dispatched. Estimated arrival: {responseTime}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Location shared with authorities</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Emergency contacts notified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Alert timestamp: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent border-red-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent border-red-300"
              onClick={() => {
                setIsEmergencyActive(false);
                setAlertSent(false);
                setResponseTime("");
              }}
            >
              Cancel Alert
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Button
      variant="destructive"
      size="lg"
      className="w-full h-12 text-lg font-semibold"
      onClick={handleEmergencyAlert}
    >
      <AlertTriangle className="h-6 w-6 mr-3" />
      EMERGENCY ALERT
    </Button>
  );
}
