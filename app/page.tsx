import Hero from "@/components/Hero";
import CoreTechnology from "@/components/CoreTechnology";
import ProblemSection from "@/components/ProblemSection";
import SecurityScience from "@/components/SecurityScience";
import SocialProof from "@/components/SocialProof";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/metadata";

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <main className="flex min-h-screen flex-col">
        <Hero />
        <CoreTechnology />
        <ProblemSection />
        <SecurityScience />
        <SocialProof />
      </main>
    </>
  );
}
