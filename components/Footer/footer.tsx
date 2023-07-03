import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
    return(
        <><hr className="h-px my-8 bg-gray-200 border-0 dark:bg-slate-400" /><footer className="z-20 w-full bg-inherit  flex items-center md:justify-between">
            <div className="w-full mx-auto max-w-screen-xl px-16 p-4 md:flex md:items-center md:justify-between">
                <div className=''>
                    <span className="text-sm sm:text-center text-slate-600">
                        Powered by <a href="https://openai.com/blog/chatgpt" className='hover:text-orange-600 font-bold'
                        > ChatGPT</a> &
                        <a href="https://cotswoldjobs.co.uk" className='hover:text-orange-600 font-bold'
                        > Cotswold Jobs</a>
                    </span>
                </div>
                <div className=''>
                    <ul className="flex items-center justify-center text-slate-900">
                        <li className="mr-2">
                            <Link href="https://github.com/JoshHargreaves" className="hover:text-orange-600">
                                <FaGithub className="" style={{ fontSize: '24px' }} />
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link href="https://www.linkedin.com/in/joshua-hargreaves-5b544b63/" className="hover:text-orange-600">
                                <FaLinkedin className="" style={{ fontSize: '24px' }} />
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:me@joshhargreaves.co.uk" className="">
                                <FaRegEnvelope className="" style={{ fontSize: '24px' }} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer></>
    )
}