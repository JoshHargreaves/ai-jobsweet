import Link from "next/link";
import React, { useState } from "react";
export default function Sidebar(props: { show: any; setShow: any; }) {
    const show = props.show;
    const setShow = props.setShow;
    return (
        <>
            {/* Sidebar starts */}
            <div className="absolute lg:relative w-64 shadow bg-gray-100 hidden lg:block">
                <div className="h-16 w-full text-4xl font-bold text-orange-600 text-4xl flex items-center px-8">
                <span><Link className="" href={"/"}>JobSweet</Link></span>
                </div>
                <ul aria-orientation="vertical" className=" py-6">
                    <li className="pl-6 cursor-pointer text-orange-600 text-sm leading-3 tracking-normal pb-4 pt-5 text-orange-600 focus:text-orange-600 focus:outline-none">
                        <div className="flex items-center">
                            <div>
                            </div>
                            <span className="ml-2">AI Generators</span>
                        </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                        <div className="flex items-center">
                            <span className="ml-2"><Link className="" href={"JobDescription"}>Job Description</Link></span>
                        </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                        <div className="flex items-center">
                            <span className="ml-2"><Link className="" href={"PDP"}>PDP</Link></span>
                        </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                        <div className="flex items-center">
                            <span className="ml-2"><Link className="" href={"OutOfOffice"}>Out Of Office</Link></span>
                        </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                        <div className="flex items-center">
                            <span className="ml-2"><Link className="" href={"ResignationNotice"}>Resignation Notice</Link></span>
                        </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                        <div className="flex items-center">
                            <span className="ml-2"><Link className="" href={"PrivacyPolicy"}>PrivacyPolicy</Link></span>
                        </div>
                    </li>
                </ul>
            </div>
            {/*Mobile responsive sidebar*/}
            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div>
                            <div className="flex items-center justify-between px-8">
                                <div className="h-16 w-full text-4xl font-bold text-orange-600 flex items-center">
                                <span><Link className="" href={"/"}>JobSweet</Link></span>
                                </div>
                                <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <ul aria-orientation="vertical" className=" py-6">
                                <li className="pl-6 cursor-pointer text-orange-600 text-sm leading-3 tracking-normal pb-4 pt-5 text-orange-600 focus:text-orange-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <div>
                                        </div>
                                        <span className="ml-2">AI Generators</span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="ml-2"><Link className="" href={"JobDescription"}>Job Description</Link></span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="ml-2"><Link className="" href={"PDP"}>PDP</Link></span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="ml-2"><Link className="" href={"OutOfOffice"}>Out Of Office</Link></span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="ml-2"><Link className="" href={"ResignationNotice"}>Resignation Notice</Link></span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-orange-600 focus:text-orange-600 focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="ml-2"><Link className="" href={"PrivacyPolicy"}>PrivacyPolicy</Link></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-4 w-full px-6">
                                <div className="relative w-full">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={10} cy={10} r={7} />
                                            <line x1={21} y1={21} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                    <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="border-t border-gray-300">
                                <div className="w-full flex items-center justify-between px-6 pt-1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Mobile responsive sidebar*/}
            {/* Sidebar ends */}
        </>
    );
}

