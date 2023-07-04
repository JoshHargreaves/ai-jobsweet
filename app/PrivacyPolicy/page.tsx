"use client";
import GeneratorContainer from "@/components/GeneratorContainer/generatorContainer";
import PrivacyPolicyGenerator from "@/components/PrivacyPolicyGenerator/privacyPolicyGenerator";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Home() {
  return (
    <GeneratorContainer title="Generate A Privacy Policy" subtitle="AI Generated Privacy Policy"
      generator={<PrivacyPolicyGenerator />}
    ></GeneratorContainer>
  );
}
