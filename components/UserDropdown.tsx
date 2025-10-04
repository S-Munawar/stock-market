'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import NavItems from "./NavItems"

const UserDropdown = () => {

    const router = useRouter(); // Use useRouter for navigation
    const handleSignOut = () => {
        // Perform logout logic
        router.push("/login");
    };
    const user = { name: "John Doe", email: "john.doe@example.com" }; // Replace with actual user data fetching logic

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500 ">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className="bg-yellow-400 text-yellow-900 text-sm font-bold">
                        {user?.name ? user.name.charAt(0) : 'U'}
                    </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start"><span className="text-base font-medium text-gray-400">{user?.name}</span></div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400">
            <DropdownMenuLabel>
                <div className="flex relative items-center gap-3 py-2">
                 <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className="bg-yellow-400 text-yellow-900 text-sm font-bold">
                        {user?.name ? user.name.charAt(0) : 'U'}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col"><span className="text-base font-medium text-gray-400">{user?.name}</span>
                <span>
                    {user?.email}
                </span>
                </div>
            </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600" />
            <DropdownMenuItem className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4 hidden sm:block" />
                Sign out
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-600" />
            <nav className="sm:hidden">
                <NavItems />
            </nav>

        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
