"use client";
import GeneratorContainer from "@/components/GeneratorContainer/generatorContainer";
import OutOfOfficeGenerator from "@/components/OutOfOfficeGenerator/outOfOfficeGenerator";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Home() {
  return (
    <GeneratorContainer title="Generate your out of office response" subtitle="AI generated out of office"
      generator={<OutOfOfficeGenerator />}
    ></GeneratorContainer>
  );
}