"use client";
import GeneratorContainer from "@/components/GeneratorContainer/generatorContainer";
import JobDescriptionGenerator from "@/components/JobDescriptionGenerator/jobDescriptionGenerator";
import Image from "next/image";

export default function Home() {
  return (
    <GeneratorContainer
      generator={<JobDescriptionGenerator />}
    ></GeneratorContainer>
  );
}
