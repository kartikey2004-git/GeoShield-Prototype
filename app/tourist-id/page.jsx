import { TouristIdCard } from "@/components/tourist-id-card";

export default function TouristIdPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-[6rem] pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Digital Tourist ID
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Blockchain-verified identification for enhanced safety
          </p>
        </div>

        <TouristIdCard
          name="John Smith"
          id="TST-2024-001234"
          nationality="United States"
          verificationStatus="verified"
          issueDate="Jan 15, 2024"
          location="Downtown Tourist District"
        />
      </div>
    </div>
  );
}
