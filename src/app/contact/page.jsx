'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TbArrowUpRight } from "react-icons/tb";

export default function Contact() {
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
                <p className="mt-2 text-lg leading-8 text-muted-foreground">
                    Please feel free to ask anything
                </p>
            </div>

            <form
                action="https://formspree.io/f/xgvkqvdd" // 🔁 Replace this with your actual Formspree form URL
                method="POST"
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="mt-2.5">
                        <Input name="firstname" placeholder="First Name" required />
                    </div>

                    <div className="mt-2.5">
                        <Input name="lastname" placeholder="Last Name" required />
                    </div>

                    <div className="sm:col-span-2">
                        <div className="mt-2.5">
                            <Input name="company" placeholder="Company" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <div className="mt-2.5">
                            <Input type="email" name="email" placeholder="Email Address" required />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <div className="mt-2.5">
                            <textarea name="message" placeholder="Type your message here..." required />
                        </div>
                    </div>

                    <div className="sm:col-span-2 flex gap-x-4 items-start mt-2">
                        <input type="checkbox" name="agreement" required className="mt-1" />
                        <span className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                            I agree to the{' '}
                            <a href="#" className="font-semibold text-primary">privacy policy</a>.
                        </span>
                    </div>

                    <div className="mt-10 sm:col-span-2">
                        <Button
                            type="submit"
                            className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-primary hover:ring-2 hover:ring-gray-950 ring-offset-2"
                        >
                            Let&apos;s Talk
                            <TbArrowUpRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
