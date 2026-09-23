import Link from 'next/link';
import React from 'react';
import { LuDumbbell } from 'react-icons/lu';

const Navbar = () => {
    const navlinks = <>
    <li><Link href="/">Workouts</Link></li>
    </>
    return (
        <div className="border-b border-gray-700">
            <nav className="navbar container mx-auto px-4 py-2">
                <div className="navbar-start">
                    <Link href="/" className="flex items-center gap-2">
                    <LuDumbbell className="text-xl text-[#C2F800]" />
                    <p className="text-xl text-white font-bold uppercase">FitLog</p>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;