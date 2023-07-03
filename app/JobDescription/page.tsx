'use client';
import JobDescriptionGenerator from '@/components/JobDescriptionGenerator/jobDescriptionGenerator';
import Image from 'next/image'

export default function Home() {
  return (
      <div className="h-[calc(100vh_-_2rem)] w-full overflow-y-scroll">
        <div className="min-h-screen w-full ">
          <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-6 sm:mt-6">
            <section className="py-10 lg:py-6 ">
              <JobDescriptionGenerator></JobDescriptionGenerator>
            </section>
          </div>
        </div>
      </div>
  )
}
