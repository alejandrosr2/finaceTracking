"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    BadgeEuro,
    CreditCard,
    UserRound,
    Settings,
    Menu,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const menuList = [
        {
            group: "Sugerencias",
            items: [
                { href: "/", label: "Dashboard", icon: <Home className="size-4 mr-2" /> },
                { href: "/transactions", label: "Transacciones", icon: <BadgeEuro className="size-4 mr-2" /> },
                { href: "/accounts", label: "Cuentas", icon: <CreditCard className="size-4 mr-2" /> },
            ],
        },
        {
            group: "Configuración",
            items: [
                { href: "/profile", label: "Perfil", icon: <UserRound className="size-4 mr-2" /> },
                { href: "/settings", label: "Ajustes", icon: <Settings className="size-4 mr-2" /> },
            ],
        },
    ];

    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
                    onClick={closeSidebar}
                ></div>
            )}
            <button
                className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-blue-300 text-white z-30"
                onClick={toggleSidebar}
            >
                <Menu className="size-4 mx-auto" />
            </button>
            <div
                className={`fixed top-0 left-0 w-[300px] h-full border-r bg-blue-200 z-30 transition-transform duration-300 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:relative md:translate-x-0`}
            >
                <div className="p-4 min-w-full min-h-[72px] max-h-[72px] flex items-center bg-blue-300 text-2xl">
                    <Image src="/logo.svg" height={100} width={100} alt="logo" />
                </div>
                <div className="grow p-4">
                    {menuList.map((menu, i) => (
                        <div key={i}>
                            <h3 className="text-sm mb-2">{menu.group}</h3>
                            {menu.items.map((item, index) => (
                                <Link href={item.href} key={index} className={`flex items-center p-2 hover:bg-blue-100 rounded-md ${pathname === item.href ? "bg-blue-100" : ""}`}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
