import Link from 'next/link';
import React from 'react';
import { LuDumbbell } from 'react-icons/lu';

const Footer = () => {
    return (
        <div>
            <footer className="footer container mx-auto px-4 py-6 flex justify-between items-center">
                {/*Logo*/}
                <div className="footer-start">
                    <Link href="/" className="flex items-center gap-2">
                        <LuDumbbell className="text-xl text-[#C2F800]" />
                        <p className="text-xl text-white font-bold uppercase">FitLog</p>
                    </Link>
                </div>
                <div className="footer-end">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} FitLog. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;