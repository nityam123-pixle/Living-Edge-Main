import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BadgeCheck, Camera, CheckCircle, ClipboardList, Clock, Eye, Factory, FileCheck, Hammer, Handshake, Home, LayoutDashboard, MailOpen, PencilRuler, Smile, Users } from "lucide-react";

export function Resume() {
    const data = [
        {
            title: "Why Choose Us?",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <LayoutDashboard size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "One Stop Solution",
                            description:
                                "We manage everything from design to delivery, making your journey seamless and stress-free.",
                        },
                        {
                            icon: <Factory size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "In House Manufacturing",
                            description:
                                "Our in-house facility ensures custom work with quality control and faster execution.",
                        },
                        {
                            icon: <Users size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Experienced Team",
                            description:
                                "A dedicated team with deep expertise ensures flawless project delivery every time.",
                        },
                        {
                            icon: <Hammer size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "On-Site Execution",
                            description:
                                "Specialized professionals execute on-site tasks with care and efficiency.",
                        },
                        {
                            icon: <Clock size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "On Time Completion",
                            description:
                                "Punctuality is key—we adhere strictly to project timelines and deliver on schedule.",
                        },
                        {
                            icon: <Smile size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Customer Satisfaction",
                            description:
                                "Client happiness is our priority. We go above and beyond to meet your expectations.",
                        },
                        {
                            icon: <PencilRuler size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "In House Designer",
                            description:
                                "Our creative in-house designers bring your vision to life with tailored concepts.",
                        },
                        {
                            icon: <BadgeCheck size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Quality Output",
                            description:
                                "We focus on delivering only the highest standards in workmanship and materials.",
                        },
                        {
                            icon: <Camera size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "3D Visualisation",
                            description:
                                "Visual previews help you experience your space before execution starts.",
                        },
                        {
                            icon: <ClipboardList size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Planning & Design",
                            description:
                                "Each project starts with detailed planning and precise design strategy.",
                        },
                        {
                            icon: <Eye size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Transparency",
                            description:
                                "We maintain full transparency in processes, pricing, and timelines.",
                        },
                        {
                            icon: <CheckCircle size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Professional Approach",
                            description:
                                "We work with integrity, clear communication, and professional project management.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="text-left">
                            {item.icon}
                            <h4 className="text-[#f4f4f4] text-[1.1rem] font-semibold mb-1">{item.title}</h4>
                            <p className="text-xs text-neutral-400 dark:text-neutral-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: "Our Transparent Process.",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            icon: <Handshake size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Meet Living Edge",
                            description: "Schedule an initial meeting to understand your needs and space.",
                        },
                        {
                            icon: <FileCheck size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Order Processed",
                            description: "We document your order details and begin internal coordination.",
                        },
                        {
                            icon: <PencilRuler size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Book with Signing Amount",
                            description: "Reserve your project slot by paying the initial booking amount.",
                        },
                        {
                            icon: <ClipboardList size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Finalize Design & Quotation (MOU)",
                            description: "Finalize layout, quotation, and sign a detailed agreement.",
                        },
                        {
                            icon: <MailOpen size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Share Requirement",
                            description: "You provide detailed inputs and preferences for your project.",
                        },
                        {
                            icon: <Hammer size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Work Begins",
                            description: "Execution starts on-site with close supervision and updates.",
                        },
                        {
                            icon: <CheckCircle size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Hand Over & Completion",
                            description: "Final handover with inspection and walkthrough for quality.",
                        },
                        {
                            icon: <Home size={28} className="text-[#f4f4f4] mb-3" />,
                            title: "Move Into Your Space",
                            description: "Your beautifully designed space is ready to welcome you.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col">
                            {item.icon}
                            <h4 className="text-[#f4f4f4] text-lg font-semibold">{item.title}</h4>
                            <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Recent milestones and improvements we’ve achieved at Living Edge.
                    </p>

                    <div className="mb-8 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ☑️ Completed 400+ new residential projects
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ☑️ Onboarded 25+ well known architects , interiors and contractors
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ☑️ Introduced new 3D visualization system
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ☑️ Onboarded 12+ architects and contractors
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ☑️ Improved project tracking and delivery workflow
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/living-edge 1.jpeg"
                            alt="Living Edge Residential Interior"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/images/living-edge 2.jpeg"
                            alt="Living Edge Studio"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/images/living-edge 3.jpeg"
                            alt="Custom Modular Furniture"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/images/living-edge 4.jpeg"
                            alt="Architect Collaboration"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            )
        },
    ];
    return (
        <div className="relative w-full overflow-clip" id="changelog">
            <Timeline data={data} />
        </div>
    );
}
