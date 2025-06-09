'use client'

import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Map,
    Facebook,
    Instagram,
    Youtube
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-neutral-200 text-gray-800 dark:bg-[#111] dark:text-gray-300 z-50">
            <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Logo + Tagline */}
                <div className="flex flex-col items-center md:items-start">
                    {/* Light Mode Logo */}
                    <Image
                        src="/logo2.png"
                        alt="Living Edge Logo (Light)"
                        width={150}
                        height={50}
                        className="mb-4 block dark:hidden"
                    />
                    {/* Dark Mode Logo */}
                    <Image
                        src="/logo2.png"
                        alt="Living Edge Logo (Dark)"
                        width={150}
                        height={50}
                        className="mb-4 hidden dark:block"
                    />
                    <p className="text-center md:text-left text-sm text-gray-600 dark:text-gray-300">
                        Elevating spaces with timeless interior design.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-black dark:text-white text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin size={16} className="mt-0.5 text-black dark:text-white" />
                            607, Interstellar, Baghban party plot road, NR. Sindhu Bhavan Rd. Ahmedabad, Gujarat 380059
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} className="text-black dark:text-white" />
                            +91 92652 83867
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-black dark:text-white" />
                            contact@livingedge.in
                        </li>
                        <li className="flex items-center gap-2">
                            <Globe size={16} className="text-black dark:text-white" />
                            www.livingedge.in
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-black dark:text-white text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Facebook size={16} className="text-black dark:text-white" />
                            <Link href="https://www.facebook.com/profile.php?id=61575759748503" className="hover:underline">Facebook</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Instagram size={16} className="text-black dark:text-white" />
                            <Link href="https://www.instagram.com/livingedge_interior?igsh=MWF4eHl6dTdoa3g3dw==" className="hover:underline">Instagram</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Youtube size={16} className="text-black dark:text-white" />
                            <Link href="https://youtube.com/@livingedge_interior?si=x3-AMnnsORSw34rk" className="hover:underline">YouTube</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Map size={16} className="text-black dark:text-white" />
                            <Link href="https://maps.app.goo.gl/HwVTvXN8tCfp2ZNP8" className="hover:underline">View Map</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                className="text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700 py-6"
            >
                &copy; 2025 Living Edge Interior. All rights reserved.
            </motion.div>
        </footer>
    );
}
