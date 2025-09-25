"use client";

import { useState } from "react";

import {
  Shield,
  QrCode,
  Key,
  Lock,
  CheckCircle,
  Copy,
  Download,
  Fingerprint,
  Globe,
  Eye,
} from "lucide-react";

import { BsQrCode } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function BlockchainIDPage() {
  const [touristData, setTouristData] = useState({
    name: "",
    nationality: "",
    passportNumber: "",
    email: "",
  });

  const [blockchainID, setBlockchainID] = useState({
    id: "TST-2024-001234",
    hash: "0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    publicKey:
      "0x04f355bdcc59e368623d3cec07a7c8c0c728f9bcb6c8b6c8b6c8b6c8b6c8b6c8",
    privateKey:
      "0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    status: "verified",
    createdAt: "2024-01-15T10:30:00Z",
    lastVerified: "2024-01-20T14:22:00Z",
    blockNumber: 18945672,
    transactionHash:
      "0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const [verificationStep, setVerificationStep] = useState(0);

  const handleGenerateID = async () => {
    setIsGenerating(true);
    setVerificationStep(0);

    // Simulate blockchain ID generation process
    const steps = [
      "Validating identity documents...",
      "Generating cryptographic keys...",
      "Creating blockchain transaction...",
      "Mining block...",
      "Verifying on network...",
      "ID successfully created!",
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setVerificationStep(i + 1);
    }

    setIsGenerating(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "text-green-600 bg-green-50 border-green-200";
      case "pending":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "expired":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Blockchain ID System
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Secure Digital Identity Verification
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Network Online
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <Tabs defaultValue="generate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="generate">Generate ID</TabsTrigger>
            <TabsTrigger value="verify">Verify ID</TabsTrigger>
            <TabsTrigger value="manage">Manage Keys</TabsTrigger>
            <TabsTrigger value="network">Network Status</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Blockchain ID</CardTitle>
                  <CardDescription>
                    Generate a secure, verifiable digital identity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2" htmlFor="name">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={touristData.name}
                        onChange={(e) =>
                          setTouristData({
                            ...touristData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label className="mb-2" htmlFor="nationality">
                        Nationality
                      </Label>
                      <Input
                        id="nationality"
                        value={touristData.nationality}
                        onChange={(e) =>
                          setTouristData({
                            ...touristData,
                            nationality: e.target.value,
                          })
                        }
                        placeholder="Enter your nationality"
                      />
                    </div>
                    <div>
                      <Label className="mb-2" htmlFor="passport">
                        Passport Number
                      </Label>
                      <Input
                        id="passport"
                        value={touristData.passportNumber}
                        onChange={(e) =>
                          setTouristData({
                            ...touristData,
                            passportNumber: e.target.value,
                          })
                        }
                        placeholder="Enter passport number"
                      />
                    </div>
                    <div>
                      <Label className="mb-2" htmlFor="email">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={touristData.email}
                        onChange={(e) =>
                          setTouristData({
                            ...touristData,
                            email: e.target.value,
                          })
                        }
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleGenerateID}
                    disabled={isGenerating}
                    className="w-full"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Generating ID...
                      </>
                    ) : (
                      <>
                        <Shield className="h-5 w-5 mr-2" />
                        Generate Blockchain ID
                      </>
                    )}
                  </Button>

                  {isGenerating && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Generation Progress
                      </div>
                      <div className="space-y-2">
                        {[
                          "Validating identity documents...",
                          "Generating cryptographic keys...",
                          "Creating blockchain transaction...",
                          "Mining block...",
                          "Verifying on network...",
                          "ID successfully created!",
                        ].map((step, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                            {index < verificationStep ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : index === verificationStep ? (
                              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-slate-300 rounded-full" />
                            )}
                            <span
                              className={
                                index < verificationStep
                                  ? "text-green-600"
                                  : index === verificationStep
                                  ? "text-blue-600"
                                  : "text-slate-500"
                              }
                            >
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {blockchainID && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Your Blockchain ID
                      <Badge
                        variant="outline"
                        className={getStatusColor(blockchainID.status)}
                      >
                        {blockchainID.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Secure digital identity on the blockchain
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-lg">
                      <BsQrCode className="h-16 w-16  mx-auto mb-4" />
                      <p className="font-mono text-lg font-semibold dark:text-indigo-100">
                        {blockchainID.id}
                      </p>
                      <p className="text-sm  dark:text-indigo-300 mt-2">
                        Scan QR code for verification
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs text-slate-600 dark:text-slate-400">
                          Block Number
                        </Label>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            #{blockchainID.blockNumber}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                blockchainID.blockNumber.toString()
                              )
                            }
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs text-slate-600 dark:text-slate-400">
                          Transaction Hash
                        </Label>
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded truncate">
                            {blockchainID.transactionHash}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(blockchainID.transactionHash)
                            }
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <Label className="text-xs text-slate-600 dark:text-slate-400">
                            Created
                          </Label>
                          <p className="font-medium">Jan 15, 2024</p>
                        </div>
                        <div>
                          <Label className="text-xs text-slate-600 dark:text-slate-400">
                            Last Verified
                          </Label>
                          <p className="font-medium">Jan 20, 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                      >
                        <QrCode className="h-4 w-4 mr-2" />
                        Show QR
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="verify" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Verify Blockchain ID</CardTitle>
                <CardDescription>
                  Validate the authenticity of a blockchain identity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2" htmlFor="verify-id">
                      Tourist ID
                    </Label>
                    <Input id="verify-id" placeholder="Enter TST-XXXX-XXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="verify-hash" className="mb-2">
                      Transaction Hash
                    </Label>
                    <Input
                      id="verify-hash"
                      placeholder="Enter transaction hash"
                    />
                  </div>
                </div>
                <Button className="w-full">
                  <Fingerprint className="h-4 w-4 mr-2" />
                  Verify Identity
                </Button>

                <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    ID TST-2024-001234 is verified and authentic. Last
                    verification: 2 hours ago.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cryptographic Keys</CardTitle>
                  <CardDescription>
                    Manage your public and private keys securely
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Public Key</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded flex-1 truncate">
                        {blockchainID?.publicKey}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(blockchainID?.publicKey || "")
                        }
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Private Key</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded flex-1">
                        ••••••••••••••••••••••••
                      </code>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Keep your private key secure and never share it
                    </p>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                    <Lock className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      Your private key is encrypted and stored securely. Never
                      share it with anyone.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Configure your blockchain identity security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Two-Factor Authentication
                      </span>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        Enabled
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Biometric Verification
                      </span>
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Auto-Renewal</span>
                      <Badge
                        variant="outline"
                        className="text-blue-600 border-blue-600"
                      >
                        Enabled
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Emergency Recovery
                      </span>
                      <Badge
                        variant="outline"
                        className="text-amber-600 border-amber-600"
                      >
                        Setup Required
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 mt-20 border-t border-slate-200 dark:border-slate-700">
                    <Button variant="outline" className="w-full bg-transparent">
                      <Key className="h-4 w-4 mr-2" />
                      Generate New Keys
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Network Status
                  </CardTitle>
                  <Globe className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold text-green-600">
                    Online
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    99.9% uptime
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Block Height
                  </CardTitle>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold text-blue-600">
                    18,945,672
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Latest block
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active IDs
                  </CardTitle>
                  <Shield className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold text-purple-600">
                    12,847
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Verified identities
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Blockchain Network Information</CardTitle>
                <CardDescription>
                  Real-time network statistics and performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Network Metrics
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Transaction Speed</span>
                        <span className="font-medium">2.3 seconds</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Gas Price</span>
                        <span className="font-medium">0.000021 ETH</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Network Congestion</span>
                        <span className="text-green-600 font-medium">Low</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Validator Nodes</span>
                        <span className="font-medium">1,247</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Security Status
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Consensus Algorithm</span>
                        <span className="font-medium">Proof of Stake</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Encryption</span>
                        <span className="text-green-600 font-medium">
                          AES-256
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hash Function</span>
                        <span className="font-medium">SHA-256</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Network Security</span>
                        <span className="text-green-600 font-medium">High</span>
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
