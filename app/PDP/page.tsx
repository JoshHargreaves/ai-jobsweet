'use client';
import GeneratorContainer from '@/components/GeneratorContainer/generatorContainer';
import JobDescriptionGenerator from '@/components/JobDescriptionGenerator/jobDescriptionGenerator';
import PDPGenerator from '@/components/PDPGenerator/pdpGenerator';
import Sidebar from '@/components/Sidebar/sidebar'
import Image from 'next/image'

export default function Home() {
    return (
        <GeneratorContainer generator={<PDPGenerator />}></GeneratorContainer>
    )
}
