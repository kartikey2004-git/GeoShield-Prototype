"use client";

import { useEffect, useState } from "react";

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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import axios from "axios";

export default function BlockchainIDPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/generate-id",
        {
          fullName,
          email,
        }
      );
      setResult(data);
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.error || "Server error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    const fetchIDs = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/blockchain-ids");
        setIds(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blockchain IDs");
      } finally {
        setLoading(false);
      }
    };

    fetchIDs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

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

          {/* Generate ID Tab */}
          <TabsContent value="generate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {/* Form Card */}
              <Card className="w-full shadow-lg">
                <CardHeader>
                  <CardTitle>Create Blockchain ID</CardTitle>
                  <CardDescription>
                    Generate a secure, verifiable digital identity
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Generating..." : "Generate ID"}
                    </Button>
                  </form>

                  {error && (
                    <p className="text-red-500 mt-3 text-sm">{error}</p>
                  )}
                </CardContent>

                <CardFooter className="text-xs text-slate-500 dark:text-slate-400">
                  ⚡️ Your private keys are securely encrypted and never
                  exposed.
                </CardFooter>

                <CardFooter className="flex items-center gap-2 justify-center text-sm text-yellow-800 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900 px-3 py-1 rounded-md">
                  Please avoid creating multiple Blockchain IDs frequently.
                </CardFooter>
              </Card>

              {/* Blockchain IDs List */}
              <div className="grid grid-cols-1 gap-4">
                {ids.map((item) => (
                  <Card
                    key={item._id}
                    className="w-full shadow-lg flex flex-col"
                  >
                    <CardContent className="flex flex-col h-full justify-between">
                      <div>
                        <p>
                          <span className="font-semibold">Blockchain ID:</span>{" "}
                          <span className="break-all">
                            {String(item.blockchainId)}
                          </span>
                        </p>
                      </div>

                      <div className="mt-auto space-y-1">
                        <p>
                          <span className="font-semibold">Created:</span>{" "}
                          {new Date(item.createdAt).toLocaleString()}
                        </p>
                        <p>
                          <span className="font-semibold">Updated:</span>{" "}
                          {new Date(item.updatedAt).toLocaleString()}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Verify ID Tab */}
          <TabsContent value="verify" className="space-y-6">
            <Card className="max-w-full mx-auto mt-6 shadow-lg">
              <CardHeader>
                <CardTitle>Verify Blockchain ID</CardTitle>
                <CardDescription>
                  Check if a blockchain ID is authentic
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <form className="flex flex-col gap-3">
                  <div>
                    <Label htmlFor="blockchainId" className="mb-2">
                      Blockchain ID
                    </Label>
                    <Input
                      id="blockchainId"
                      // value={blockchainId}
                      // onChange={(e) => setBlockchainId(e.target.value)}
                      required
                      placeholder="Enter blockchain ID"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fullName" className="mb-2">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter email"
                    />
                  </div>

                  <Button type="submit" disabled={loading}>
                    {/* {loading ? "Verifying..." : "Verify ID"} */}
                  </Button>
                </form>

                {error && (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
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
