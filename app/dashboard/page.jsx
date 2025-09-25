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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Shield,
  Users,
  AlertTriangle,
  MapPin,
  Activity,
  Eye,
  Radio,
  Clock,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export default function AuthorityDashboard() {
  const [activeAlerts, setActiveAlerts] = useState(3);

  const [touristsMonitored, setTouristsMonitored] = useState(1247);

  const [safetyScore, setSafetyScore] = useState(87);

  const recentAlerts = [
    {
      id: "ALT-001",
      type: "behavior",
      severity: "high",
      location: "Central Plaza",
      time: "2 min ago",
      description: "Unusual crowd gathering detected",
      status: "investigating",
    },
    {
      id: "ALT-002",
      type: "emergency",
      severity: "critical",
      location: "Tourist District",
      time: "5 min ago",
      description: "Emergency button activated by tourist",
      status: "dispatched",
    },
    {
      id: "ALT-003",
      type: "geofence",
      severity: "medium",
      location: "Harbor Area",
      time: "12 min ago",
      description: "Tourist entered restricted zone",
      status: "resolved",
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "medium":
        return "bg-amber-500";
      default:
        return "bg-slate-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "dispatched":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "investigating":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "resolved":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
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
                  Authority Command Center
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Smart Tourist Safety Monitoring
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  System Online
                </span>
              </div>
              <Button variant="outline" size="sm">
                <Radio className="h-4 w-4 mr-2" />
                Dispatch
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        {/* Key Metrics */}
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
                {activeAlerts}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                +2 from last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tourists Monitored
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">
                {touristsMonitored.toLocaleString()}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                +127 since morning
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Safety Score
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">
                {safetyScore}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                +3% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Response Time
              </CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-amber-600">2.3m</div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Average response
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
            <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain IDs</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Security Alerts</CardTitle>
                <CardDescription>
                  Real-time incident monitoring and response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${getSeverityColor(
                          alert.severity
                        )}`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-slate-900 dark:text-slate-100">
                            {alert.id}
                          </span>
                          <Badge
                            variant="outline"
                            className={getStatusColor(alert.status)}
                          >
                            {alert.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {alert.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {alert.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {alert.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="default" size="sm">
                          Respond
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Live Location Tracking</CardTitle>
                  <CardDescription>
                    Real-time tourist movement monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600 dark:text-slate-400">
                        Interactive Map View
                      </p>
                      <p className="text-sm text-slate-500">
                        1,247 active locations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geo-fence Status</CardTitle>
                  <CardDescription>Protected zone monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div>
                      <p className="font-medium text-green-900 dark:text-green-100">
                        Tourist District
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        847 tourists inside
                      </p>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <div>
                      <p className="font-medium text-amber-900 dark:text-amber-100">
                        Harbor Area
                      </p>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        23 tourists inside
                      </p>
                    </div>
                    <Badge className="bg-amber-500">Restricted</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <div>
                      <p className="font-medium text-red-900 dark:text-red-100">
                        Construction Zone
                      </p>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        0 tourists inside
                      </p>
                    </div>
                    <Badge className="bg-red-500">Prohibited</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Behavior Analysis</CardTitle>
                  <CardDescription>
                    Machine learning insights and predictions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Crowd Density Analysis
                      </span>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        Normal
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Behavioral Anomalies
                      </span>
                      <Badge
                        variant="outline"
                        className="text-amber-600 border-amber-600"
                      >
                        2 Detected
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Risk Prediction
                      </span>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        Low Risk
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Pattern Recognition
                      </span>
                      <Badge
                        variant="outline"
                        className="text-blue-600 border-blue-600"
                      >
                        Learning
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Predictive Alerts</CardTitle>
                  <CardDescription>
                    AI-generated safety predictions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                      <Activity className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800 dark:text-amber-200">
                        High crowd density predicted at Central Plaza in 30
                        minutes
                      </AlertDescription>
                    </Alert>
                    <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800 dark:text-blue-200">
                        Tourist flow pattern suggests increased activity at
                        Harbor Area
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain ID Verification</CardTitle>
                <CardDescription>
                  Secure tourist identification system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div className="text-2xl font-semibold text-green-600">
                      1,203
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Verified IDs
                    </p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <div className="text-2xl font-semibold text-amber-600">
                      44
                    </div>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Pending Verification
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <div className="text-2xl font-semibold text-red-600">2</div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Flagged IDs
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <UserCheck className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">
                          John Smith - TST-2024-001234
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          United States • Verified 2 hours ago
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <UserCheck className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium">
                          Maria Garcia - TST-2024-001235
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Spain • Pending verification
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-amber-500">Pending</Badge>
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
