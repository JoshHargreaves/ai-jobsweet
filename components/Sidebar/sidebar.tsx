import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {


    return (
        <aside className="flex h-[calc(100vh_-_2rem)] w-[240px] flex-col items-center justify-between bg-slate-200 text-slate-900 py-6">
            <ul className="w-56 font-bold p-6 text-left  text-orange-600">
                <li className="pb-4"><Link className="hover:bg-slate-200 text-xl-4 active:text-indigo-600 hover:text-orange-300" href={"JobDescription"}>Job Description</Link></li>
                <li className="pb-4"><Link className="hover:bg-slate-200 text-xl-4 active:text-indigo-600 hover:text-orange-300" href={"PDP"}>PDP (Coming soon)</Link></li>
                <li className="pb-4"><Link className="hover:bg-slate-200 text-xl-4 active:text-indigo-600 hover:text-orange-300" href={"OutOfOffice"}>Out of Office</Link></li>
            </ul>
        </aside>
    );
}
