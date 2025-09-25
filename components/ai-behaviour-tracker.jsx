"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Activity, Users, AlertTriangle } from "lucide-react";

export function AIBehaviorTracker() {
  const [behaviorData, setBehaviorData] = useState({
    normalBehavior: 87,
    suspiciousActivity: 12,
    emergencyPatterns: 1,
    confidenceLevel: 94,
  });

  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    // Simulate real-time behavior analysis updates
    const interval = setInterval(() => {
      setBehaviorData((prev) => ({
        normalBehavior: Math.max(
          0,
          Math.min(100, prev.normalBehavior + (Math.random() - 0.5) * 5)
        ),
        suspiciousActivity: Math.max(
          0,
          Math.min(100, prev.suspiciousActivity + (Math.random() - 0.5) * 3)
        ),
        emergencyPatterns: Math.max(
          0,
          Math.min(100, prev.emergencyPatterns + (Math.random() - 0.5) * 2)
        ),
        confidenceLevel: Math.max(
          80,
          Math.min(99, prev.confidenceLevel + (Math.random() - 0.5) * 2)
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          AI Behavior Analysis
          {isAnalyzing && (
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Normal Behavior</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress
                value={behaviorData.normalBehavior}
                className="w-16 h-2"
              />
              <span className="text-sm font-medium text-green-600">
                {behaviorData.normalBehavior.toFixed(0)}%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium">Suspicious Activity</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress
                value={behaviorData.suspiciousActivity}
                className="w-16 h-2"
              />
              <span className="text-sm font-medium text-amber-600">
                {behaviorData.suspiciousActivity.toFixed(0)}%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium">Emergency Patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress
                value={behaviorData.emergencyPatterns}
                className="w-16 h-2"
              />
              <span className="text-sm font-medium text-red-600">
                {behaviorData.emergencyPatterns.toFixed(0)}%
              </span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              AI Confidence
            </span>
            <Badge
              variant="outline"
              className="text-purple-600 border-purple-600"
            >
              {behaviorData.confidenceLevel.toFixed(1)}%
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
