import Link from "next/link";
import { FaDiscord, FaGithub, FaLink, FaLinkedin, FaMailchimp, FaRegEnvelope, FaTwitter } from "react-icons/fa";

export default function Header() {
    return (
<header className="navbar text-slate-900 h-10 p-0 pt-6">
<div className="navbar h-full p-12 w-[240px] bg-slate-200 z-0">
            <div className="flex-none text-3xl text-orange-600 font-bold">
                <Link href={'/'}>
                    JobSweet
                </Link>
            </div>

  </div>
  <div className="navbar-end w-full mr-6">
  <Link href="https://github.com/JoshHargreaves/Job-Description-Generator" className="hover:text-orange-600">
                    <FaGithub className="" style={{ fontSize: '24px' }} />
                  </Link>
  </div>
</header>
    );
}