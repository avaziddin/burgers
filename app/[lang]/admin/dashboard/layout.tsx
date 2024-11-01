"use client"

import { Children } from "react"
import React, { ReactNode } from 'react';
import Link from "@/node_modules/next/link";

interface DashboardProps {
    children: ReactNode;
}

function Adminlayout({ children }: { children: ReactNode }) {
    

    return (
        <div className="flex" >
            <aside className="w-[20%] fixed top-0 left-0 bg-blue-800 h-screen p-10">
                <h1 className="text-white text-[40px] font-bold mb-5">Dashboard</h1>

                <Link href="/admin/dashboard/menu">
                <button className="w-full flex justify-start text-white font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3 pl-[5px]">
                    menu
                </button>
                </Link>

                <button className="w-full pl-[5px] text-white flex justify-start font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3">
                Orders
                </button>

                <button className="w-full pl-[5px] text-white flex justify-start font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3">
                Users
                </button>

                <Link href="/admin/dashboard/category">
                <button className="w-full flex justify-start text-white font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3 pl-[5px]">
                    category
                </button>
                </Link>

                <Link href="/">
                <button className="w-full flex justify-start absolute bottom-[1%] left-0 text-white font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3 pl-[5px]">
                    Log out
                </button>
                </Link>

            </aside>
            <main className='w-[80%] h-[100vh] ml-[20%] bg-blue-950'>
                {children}
            </main>
        </div>
    )
}

export default Adminlayout