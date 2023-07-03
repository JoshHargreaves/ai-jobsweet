"use client";
import GeneratorContainer from "@/components/GeneratorContainer/generatorContainer";
import OutOfOfficeGenerator from "@/components/OutOfOfficeGenerator/outOfOfficeGenerator";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Home() {
  return (
    <GeneratorContainer
      generator={<OutOfOfficeGenerator />}
    ></GeneratorContainer>
  );
}
