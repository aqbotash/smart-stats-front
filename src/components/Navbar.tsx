import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="h-16 bg-gradient-to-r from-custom-darkblue via-custom-blue via-20% to-custom-blue to-32% text-white py-4">
            <div className="flex mx-auto px-4 justify-between items-center">
                <div className="flex">
                    <a href="/" className="text-2xl font-bold">
                        <img src="/images/logo.svg" alt="Image Description" width="150" height="30" />
                    </a>
                </div>
                <div className="flex ml-4 hidden md:flex">
                    <Link href="/about" className="mx-4 hover:text-gray-300">
                        About Us
                    </Link>
                    <Link href="/contact" className="mx-4 hover:text-gray-300">
                        Contact
                    </Link>
                    <Link href="/faq" className="mx-4 hover:text-gray-300">
                        FAQ
                    </Link>
                </div>
            </div>
        </nav>
    );
}
