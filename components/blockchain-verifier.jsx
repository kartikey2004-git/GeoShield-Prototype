"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, AlertTriangle, Clock } from "lucide-react";

export function BlockchainVerifier({ touristId }) {
  const [verificationResult, setVerificationResult] = useState({
    isValid: true,
    confidence: 98.5,
    blockNumber: 18945672,
    timestamp: "2024-01-20T14:22:00Z",
    status: "verified",
  });

  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    setIsVerifying(true);
    // Simulate blockchain verification
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsVerifying(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "pending":
        return <Clock className="h-5 w-5 text-amber-600" />;
      case "failed":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <Shield className="h-5 w-5 text-slate-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "text-green-600 bg-green-50 border-green-200";
      case "pending":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "failed":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  return (
    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-indigo-600" />
          Blockchain Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Tourist ID: {touristId}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Blockchain verification status
            </p>
          </div>
          {verificationResult && (
            <div className="flex items-center gap-2">
              {getStatusIcon(verificationResult.status)}
              <Badge
                variant="outline"
                className={getStatusColor(verificationResult.status)}
              >
                {verificationResult.status}
              </Badge>
            </div>
          )}
        </div>

        {verificationResult && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Confidence</p>
                <p className="font-medium text-slate-900 dark:text-slate-100">
                  {verificationResult.confidence}%
                </p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">
                  Block Number
                </p>
                <p className="font-medium text-slate-900 dark:text-slate-100">
                  #{verificationResult.blockNumber}
                </p>
              </div>
            </div>
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Last Verified
              </p>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                {new Date(verificationResult.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        )}

        <Button
          onClick={handleVerify}
          disabled={isVerifying}
          variant="outline"
          className="w-full bg-transparent"
        >
          {isVerifying ? (
            <>
              <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2" />
              Verifying...
            </>
          ) : (
            <>
              <Shield className="h-4 w-4 mr-2" />
              Re-verify Identity
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
