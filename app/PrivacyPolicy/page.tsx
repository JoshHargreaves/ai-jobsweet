"use client";
import GeneratorContainer from "@/components/GeneratorContainer/generatorContainer";
import PrivacyPolicyGenerator from "@/components/PrivacyPolicyGenerator/privacyPolicyGenerator";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Home() {
  return (
    <GeneratorContainer
      generator={<PrivacyPolicyGenerator />}
    ></GeneratorContainer>
  );
}
