"use client"

import { Children } from "react"
import React, { ReactNode } from 'react';

interface DashboardProps {
    children: ReactNode;
}

function Adminlayout({ children }: { children: ReactNode }) {
    

    return (
        <div className="flex" >
            <aside className="w-[20%] bg-blue-800 h-screen p-10">
                <h1 className="text-white text-[40px] font-bold mb-5">Dashboard</h1>

                <button className="w-full flex justify-start text-white font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3 pl-[5px]">
                    menu
                </button>

                <button className="w-full pl-[5px] text-white flex justify-start font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3">
                Orders
                </button>

                <button className="w-full pl-[5px] text-white flex justify-start font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3">
                Users
                </button>

                <button className="w-full pl-[5px] text-white flex justify-start font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-[345px]">
                Category
                </button>

                <button className="w-full pl-[5px] text-white flex justify-start font-bold text-[24px] rounded-lg hover:bg-white hover:text-blue-600 transition-[2s] mb-3">
                Log out
                </button>

            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Adminlayout