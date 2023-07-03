import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaGithub, FaLink, FaLinkedin, FaMailchimp, FaRegEnvelope, FaTwitter } from "react-icons/fa";

export default function Header(props: { show: any; setShow: any; }) {
    const show = props.show;
    const setShow = props.setShow;
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);
    return (
<nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
<div className="hidden lg:flex w-full pr-6">

</div>
<div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
    {show ? (
        " "
    ) : (
        <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={4} y1={8} x2={20} y2={8} />
            <line x1={4} y1={16} x2={20} y2={16} />
        </svg>
    )}
</div>
</nav>
    );
}