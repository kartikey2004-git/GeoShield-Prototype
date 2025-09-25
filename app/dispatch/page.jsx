"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import {
  Radio,
  AlertTriangle,
  Clock,
  MapPin,
  Users,
  Phone,
  Car,
  Shield,
  Camera,
  FileText,
  CheckCircle,
  Send,
  Siren,
} from "lucide-react";

export default function DispatchPage() {
  const [alerts, setAlerts] = useState([
    {
      id: "DISP-001",
      type: "emergency",
      priority: "critical",
      location: "Central Plaza",
      coordinates: { lat: 40.7128, lng: -74.006 },
      description: "Tourist reported suspicious activity and potential threat",
      reportedBy: "TST-2024-001234",
      timestamp: "2024-01-20T15:30:00Z",
      status: "dispatched",
      assignedUnits: ["POLICE-01", "SECURITY-03"],
      estimatedArrival: "3 minutes",
      evidence: ["photo_001.jpg", "audio_001.mp3"],
    },
    {
      id: "DISP-002",
      type: "medical",
      priority: "high",
      location: "Harbor District",
      coordinates: { lat: 40.7089, lng: -74.0012 },
      description: "Tourist injury reported, medical assistance required",
      reportedBy: "TST-2024-001235",
      timestamp: "2024-01-20T15:25:00Z",
      status: "responding",
      assignedUnits: ["MEDICAL-02"],
      estimatedArrival: "5 minutes",
      evidence: ["photo_002.jpg"],
    },
    {
      id: "DISP-003",
      type: "security",
      priority: "medium",
      location: "Tourist Center",
      coordinates: { lat: 40.715, lng: -74.008 },
      description: "Unauthorized access to restricted area detected",
      reportedBy: "AI-SYSTEM",
      timestamp: "2024-01-20T15:20:00Z",
      status: "pending",
      assignedUnits: [],
      estimatedArrival: "",
      evidence: ["video_001.mp4"],
    },
  ]);

  const [emergencyUnits] = useState([
    {
      id: "POLICE-01",
      type: "police",
      callSign: "Unit Alpha-1",
      status: "responding",
      location: "Central Plaza",
      eta: "3 min",
    },
    {
      id: "POLICE-02",
      type: "police",
      callSign: "Unit Alpha-2",
      status: "available",
      location: "Downtown",
      eta: "8 min",
    },
    {
      id: "MEDICAL-01",
      type: "medical",
      callSign: "Ambulance-1",
      status: "available",
      location: "Hospital",
      eta: "12 min",
    },
    {
      id: "MEDICAL-02",
      type: "medical",
      callSign: "Ambulance-2",
      status: "responding",
      location: "Harbor",
      eta: "5 min",
    },
    {
      id: "FIRE-01",
      type: "fire",
      callSign: "Fire-1",
      status: "available",
      location: "Station 1",
      eta: "10 min",
    },
    {
      id: "SECURITY-01",
      type: "security",
      callSign: "Security-1",
      status: "available",
      location: "Tourist Center",
      eta: "2 min",
    },
    {
      id: "SECURITY-02",
      type: "security",
      callSign: "Security-2",
      status: "busy",
      location: "Harbor",
      eta: "15 min",
    },
    {
      id: "SECURITY-03",
      type: "security",
      callSign: "Security-3",
      status: "responding",
      location: "Central Plaza",
      eta: "3 min",
    },
  ]);

  const [selectedAlert, setSelectedAlert] = useState(null);

  const [dispatchNotes, setDispatchNotes] = useState("");

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "text-red-600 bg-red-50 border-red-200";
      case "high":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "medium":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "low":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "dispatched":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "responding":
        return "text-purple-600 bg-purple-50 border-purple-200";
      case "resolved":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getUnitStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-amber-500";
      case "responding":
        return "bg-blue-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "emergency":
        return <AlertTriangle className="h-4 w-4" />;
      case "medical":
        return <Phone className="h-4 w-4" />;
      case "fire":
        return <Siren className="h-4 w-4" />;
      case "security":
        return <Shield className="h-4 w-4" />;
      default:
        return <Radio className="h-4 w-4" />;
    }
  };

  const handleDispatchUnit = (alertId, unitId) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === alertId
          ? {
              ...alert,
              assignedUnits: [...alert.assignedUnits, unitId],
              status: "dispatched",
            }
          : alert
      )
    );
  };

  const handleUpdateStatus = (alertId, newStatus) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === alertId ? { ...alert, status: newStatus } : alert
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Emergency Dispatch Center
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Real-time alert management and response
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Dispatch Active
                </span>
              </div>
              <Button variant="destructive" size="sm">
                <Siren className="h-4 w-4 mr-2" />
                Emergency Broadcast
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        {/* Active Alerts Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-red-600">
                {alerts.filter((a) => a.status !== "resolved").length}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Requiring attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Units Responding
              </CardTitle>
              <Car className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">
                {emergencyUnits.filter((u) => u.status === "responding").length}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                En route to incidents
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Available Units
              </CardTitle>
              <Shield className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">
                {emergencyUnits.filter((u) => u.status === "available").length}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Ready for dispatch
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Response Time
              </CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-amber-600">4.2m</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Current average
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="units">Emergency Units</TabsTrigger>
            <TabsTrigger value="evidence">Evidence Logs</TabsTrigger>
            <TabsTrigger value="reports">Incident Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Priority Alerts</CardTitle>
                  <CardDescription>
                    Real-time emergency and security alerts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedAlert?.id === alert.id
                            ? "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800"
                            : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                        }`}
                        onClick={() => setSelectedAlert(alert)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {getTypeIcon(alert.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium text-slate-900 dark:text-slate-100">
                                {alert.id}
                              </span>
                              <Badge
                                variant="outline"
                                className={getPriorityColor(alert.priority)}
                              >
                                {alert.priority}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={getStatusColor(alert.status)}
                              >
                                {alert.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                              {alert.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {alert.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {new Date(alert.timestamp).toLocaleTimeString()}
                              </span>
                              {alert.assignedUnits.length > 0 && (
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {alert.assignedUnits.length} units
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedAlert && (
                <Card>
                  <CardHeader>
                    <CardTitle>Alert Details - {selectedAlert.id}</CardTitle>
                    <CardDescription>
                      Manage response and dispatch units
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Priority
                        </label>
                        <Badge
                          variant="outline"
                          className={getPriorityColor(selectedAlert.priority)}
                        >
                          {selectedAlert.priority}
                        </Badge>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Status
                        </label>
                        <Select
                          value={selectedAlert.status}
                          onValueChange={(value) =>
                            handleUpdateStatus(selectedAlert.id, value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="dispatched">
                              Dispatched
                            </SelectItem>
                            <SelectItem value="responding">
                              Responding
                            </SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Location
                      </label>
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        {selectedAlert.location}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {selectedAlert.coordinates.lat},{" "}
                        {selectedAlert.coordinates.lng}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Description
                      </label>
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        {selectedAlert.description}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Assigned Units
                      </label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedAlert.assignedUnits.map((unitId) => (
                          <Badge key={unitId} variant="outline">
                            {emergencyUnits.find((u) => u.id === unitId)
                              ?.callSign || unitId}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Evidence
                      </label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedAlert.evidence.map((evidence, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-blue-600 border-blue-600"
                          >
                            <Camera className="h-3 w-3 mr-1" />
                            {evidence}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Dispatch Notes
                      </label>
                      <Textarea
                        value={dispatchNotes}
                        onChange={(e) => setDispatchNotes(e.target.value)}
                        placeholder="Add dispatch notes..."
                        className="mt-1"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex-1"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Dispatch Units
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Generate Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="units" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyUnits.map((unit) => (
                <Card key={unit.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">
                        {unit.callSign}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getUnitStatusColor(
                            unit.status
                          )}`}
                        />
                        <Badge variant="outline">{unit.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-900 dark:text-slate-100">
                        {unit.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-900 dark:text-slate-100">
                        ETA: {unit.eta}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      disabled={unit.status !== "available"}
                    >
                      <Radio className="h-4 w-4 mr-2" />
                      {unit.status === "available" ? "Dispatch" : "Unavailable"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evidence" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Evidence Management</CardTitle>
                <CardDescription>
                  Automated evidence collection and logging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <div className="text-2xl font-semibold text-blue-600">
                        47
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Photos Collected
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <div className="text-2xl font-semibold text-green-600">
                        23
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Audio Recordings
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <div className="text-2xl font-semibold text-purple-600">
                        12
                      </div>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Video Files
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Recent Evidence
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Camera className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">photo_001.jpg</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              DISP-001 • Central Plaza • 15:30
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-green-600 border-green-600"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">audio_001.mp3</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              DISP-001 • Emergency call • 15:30
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-green-600 border-green-600"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Incident Reports</CardTitle>
                <CardDescription>
                  Generated reports and documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      All incident reports are automatically generated and
                      stored securely with blockchain verification.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <p className="font-medium">
                          Incident Report - DISP-001
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Emergency response • Central Plaza • Jan 20, 2024
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <p className="font-medium">
                          Medical Response - DISP-002
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Tourist injury • Harbor District • Jan 20, 2024
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
