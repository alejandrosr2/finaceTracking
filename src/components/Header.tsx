import UserItem from "./UserItem"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Header = () => {
    return (
        <div className="p-4 min-h-[72px] max-h-[72px] flex items-center justify-between">
            <UserItem/>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="/avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Subscripción</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default Header
