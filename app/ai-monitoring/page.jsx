"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Activity,
  Eye,
  TrendingUp,
  Users,
  AlertTriangle,
  Camera,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AIMonitoring() {
  const [behaviorPatterns, setBehaviorPatterns] = useState([
    {
      id: "BP-001",
      type: "normal",
      confidence: 94,
      location: "Central Plaza",
      timestamp: "2 min ago",
      description: "Regular tourist movement patterns",
      touristCount: 45,
    },
    {
      id: "BP-002",
      type: "suspicious",
      confidence: 78,
      location: "Harbor District",
      timestamp: "5 min ago",
      description: "Unusual gathering behavior detected",
      touristCount: 12,
    },
    {
      id: "BP-003",
      type: "emergency",
      confidence: 91,
      location: "Tourist Center",
      timestamp: "8 min ago",
      description: "Rapid dispersal pattern indicating panic",
      touristCount: 23,
    },
  ]);

  const [aiModels] = useState([
    {
      name: "Crowd Behavior Analysis",
      status: "active",
      accuracy: 94.2,
      lastUpdated: "5 min ago",
      predictions: 1247,
    },
    {
      name: "Anomaly Detection",
      status: "active",
      accuracy: 87.8,
      lastUpdated: "3 min ago",
      predictions: 892,
    },
    {
      name: "Risk Assessment",
      status: "training",
      accuracy: 91.5,
      lastUpdated: "1 hour ago",
      predictions: 634,
    },
    {
      name: "Pattern Recognition",
      status: "active",
      accuracy: 89.3,
      lastUpdated: "2 min ago",
      predictions: 1456,
    },
  ]);

  const [realTimeMetrics, setRealTimeMetrics] = useState({
    processedFrames: 15420,
    detectedObjects: 1247,
    behaviorAnalyses: 892,
    alertsGenerated: 23,
  });

  useEffect(() => {
    // Simulate real-time updates

    const interval = setInterval(() => {
      setRealTimeMetrics((prev) => ({
        processedFrames: prev.processedFrames + Math.floor(Math.random() * 10),
        detectedObjects: prev.detectedObjects + Math.floor(Math.random() * 5),
        behaviorAnalyses: prev.behaviorAnalyses + Math.floor(Math.random() * 3),
        alertsGenerated: prev.alertsGenerated + (Math.random() > 0.9 ? 1 : 0),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getPatternColor = (type) => {
    switch (type) {
      case "normal":
        return "text-green-600 bg-green-50 border-green-200";
      case "suspicious":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "emergency":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "training":
        return "bg-blue-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  AI Behavior Monitoring
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Machine Learning Safety Analysis
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  AI Models Active
                </span>
              </div>
              <Button variant="outline" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                Retrain Models
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Processed Frames
              </CardTitle>
              <Camera className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">
                {realTimeMetrics.processedFrames.toLocaleString()}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Real-time processing
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Detected Objects
              </CardTitle>
              <Eye className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">
                {realTimeMetrics.detectedObjects.toLocaleString()}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Active tracking
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Behavior Analyses
              </CardTitle>
              <Activity className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-purple-600">
                {realTimeMetrics.behaviorAnalyses.toLocaleString()}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Pattern recognition
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Alerts Generated
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-red-600">
                {realTimeMetrics.alertsGenerated}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Today's alerts
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="patterns" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patterns">Behavior Patterns</TabsTrigger>
            <TabsTrigger value="models">AI Models</TabsTrigger>
            <TabsTrigger value="analytics">Predictive Analytics</TabsTrigger>
            <TabsTrigger value="training">Model Training</TabsTrigger>
          </TabsList>

          <TabsContent value="patterns" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Behavior Analysis</CardTitle>
                <CardDescription>
                  AI-detected patterns and anomalies in tourist behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {behaviorPatterns.map((pattern) => (
                    <div
                      key={pattern.id}
                      className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-slate-900 dark:text-slate-100">
                            {pattern.id}
                          </span>
                          <Badge
                            variant="outline"
                            className={getPatternColor(pattern.type)}
                          >
                            {pattern.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                            <Target className="h-3 w-3" />
                            {pattern.confidence}% confidence
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          {pattern.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {pattern.touristCount} tourists
                          </span>
                          <span>{pattern.location}</span>
                          <span>{pattern.timestamp}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Progress value={pattern.confidence} className="w-20" />
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Analyze
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="models" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiModels.map((model) => (
                <Card key={model.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getStatusColor(
                            model.status
                          )}`}
                        />
                        <Badge variant="outline">{model.status}</Badge>
                      </div>
                    </div>
                    <CardDescription>
                      AI model performance and statistics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Accuracy</span>
                        <span className="font-medium">{model.accuracy}%</span>
                      </div>
                      <Progress value={model.accuracy} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-600 dark:text-slate-400">
                          Predictions
                        </p>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {model.predictions.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400">
                          Last Updated
                        </p>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {model.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View Metrics
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Retrain
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Predictive Risk Assessment</CardTitle>
                  <CardDescription>
                    AI-generated safety predictions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      Low risk predicted for next 2 hours based on current
                      patterns
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      Increased crowd density expected at Central Plaza around 3
                      PM
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Risk Factors
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Weather Impact</span>
                        <span className="text-green-600">Low (15%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Event Influence</span>
                        <span className="text-amber-600">Medium (45%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Historical Patterns</span>
                        <span className="text-green-600">Normal (25%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Behavior Trends</CardTitle>
                  <CardDescription>Pattern analysis over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600 dark:text-slate-400">
                        Behavior Trend Chart
                      </p>
                      <p className="text-sm text-slate-500">
                        Real-time analytics visualization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Model Training Pipeline</CardTitle>
                <CardDescription>
                  Continuous learning and improvement system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <div className="text-2xl font-semibold text-blue-600">
                      2.4M
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Training Samples
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div className="text-2xl font-semibold text-green-600">
                      94.2%
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Average Accuracy
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <div className="text-2xl font-semibold text-purple-600">
                      12
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Active Models
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">
                    Training Status
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <p className="font-medium">Crowd Behavior Model v2.1</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Training in progress
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={67} className="w-20" />
                        <span className="text-sm font-medium">67%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <p className="font-medium">Anomaly Detection v1.8</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Scheduled for training
                        </p>
                      </div>
                      <Badge variant="outline">Queued</Badge>
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
