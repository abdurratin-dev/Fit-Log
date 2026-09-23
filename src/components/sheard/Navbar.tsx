"use client";
import Link from "next/link";
import React from "react";
import { LuDumbbell } from "react-icons/lu";
import NavPlanButton from "../AppButtons/NavPlanButton";
import NavSavedButton from "../AppButtons/NavSavedButton";
import { usePathname } from "next/dist/client/components/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navlinks = (
    <>
      <li>
        <Link
          href="/"
          className={`font-bold hover:text-white ${pathname === "/" ? "text-[#C2F800]" : "text-gray-300"}`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`font-bold hover:text-white ${pathname === "/my-plan" ? "text-[#C2F800]" : "text-gray-300"}`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className="border-b border-gray-700/6 backdrop-blur-md">
      <nav className="navbar container mx-auto px-4 py-2">
        {/* Navbar start */ }
        <div className="navbar-start">
            {/*Mobile menu bar*/ }
          <div className="dropdown md:hidden block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          {/*Logo*/ }
          <Link href="/" className="flex items-center gap-2">
            <LuDumbbell className="text-xl text-[#C2F800]" />
            <p className="text-xl text-white font-bold uppercase">FitLog</p>
          </Link>
        </div>
        {/* Navbar center */ }
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navlinks}</ul>
        </div>
        {/* Navbar end */ }
        <div className="navbar-end">
          <Link href="/my-plan" className="hover:pointer-cursor">
            {/*NavPlanButton*/}
            <NavPlanButton />
          </Link>
          <Link href="/my-plan" className="hover:pointer-cursor">
            {/*NavSavedButton*/}
            <NavSavedButton />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
