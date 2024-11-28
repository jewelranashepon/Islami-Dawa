"use client";
import React from "react";
import { useState } from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaQuran } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { MdOutlineMosque } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";

import { usePathname } from "next/navigation"; // Use usePathname for the App Router

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const pathname = usePathname(); // Get the current route
  const isActive = (path) => pathname === path; // Check if the current path matches

  return (
    <aside
      className={`flex flex-col ${
        isCollapsed ? "w-[68px]" : "w-52"
      } transition-width duration-500 h-screen bg-[#155E75] overflow-x-hidden border-t border-slate-700`}
    >
      <div className="p-4 text-right">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none transform transition-transform duration-300"
        >
          {isCollapsed ? (
            <LuArrowRightToLine className="size-6 font-extrabold flex justify-center text-center" />
          ) : (
            <LuArrowLeftFromLine className="size-6 flex justify-end font-extrabold" />
          )}
        </button>
      </div>

      <nav className="p-4 grow overflow-y-auto overflow-x-hidden">
        <ul className="space-y-2">
          <a
            href="/dashboard"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LuLayoutDashboard className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              ড্যাশবোর্ড
            </li>
          </a>

          <a
            href="/amoli-muhasaba"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/amoli-muhasaba")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaRegFileAlt className="size-5" />
            </div>

            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              আ’মলি মুহাসাবা
            </li>
          </a>

          <a
            href="moktob"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/moktob")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LiaChalkboardTeacherSolid className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              মক্তব বিষয়
            </li>
          </a>

          <a
            href="talim"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/talim")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaQuran className="size-5" />
            </div>

            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              তালিম বিষয়
            </li>
          </a>

          <a
            href="dayi"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dayi")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdOutlinePeopleAlt className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দায়ী বিষয়
            </li>
          </a>

          <a
            href="dawati"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dawati")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaRegHandshake className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দাওয়াতি বিষয়
            </li>
          </a>

          <a
            href="dawati-mojlis"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dawati-mojlis")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaPeoplePulling className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দাওয়াতি মজলিশ
            </li>
          </a>

          <a
            href="jamat"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/jamat")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdOutlineMosque className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              জামাত বিষয়
            </li>
          </a>

          <a
            href="dine-fera"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dine-fera")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <BsMoonStars className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দ্বীনে ফিরে এসেছে
            </li>
          </a>

          <a
            href="sofor"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/sofor")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdOutlineTravelExplore className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              সফর বিষয়
            </li>
          </a>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
