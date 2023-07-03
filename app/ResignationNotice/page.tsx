"use client";
import GeneratorContainer from "@/components/GeneratorContainer/generatorContainer";
import ResignationNoticeGenerator from "@/components/ResginationNotice/resignationNoticeGenerator";
import Sidebar from "@/components/Sidebar/sidebar";

export default function Home() {
  return (
    <GeneratorContainer
      generator={<ResignationNoticeGenerator />}
    ></GeneratorContainer>
  );
}
