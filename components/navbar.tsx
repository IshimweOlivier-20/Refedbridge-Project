"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GraduationCap, Menu, Settings, LogOut, User } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

// Mock authentication state - in real app, this would come from context/auth provider
const useAuth = () => {
  // This would be replaced with actual auth logic
  const [user, setUser] = useState(null) // Set to null for logged out, or user object for logged in

  // Mock user for testing - uncomment to test logged in state
  // const [user, setUser] = useState({
  //   name: "John Doe",
  //   email: "john@example.com",
  //   role: "learner" // learner, teacher, mentor, admin
  // })

  const login = (userData: any) => setUser(userData)
  const logout = () => setUser(null)

  return { user, login, logout, isAuthenticated: !!user }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()

  const publicNavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const studentNavItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const navItems = isAuthenticated && user?.role === "learner" ? studentNavItems : publicNavItems

  const getDashboardLink = () => {
    if (!user) return "/dashboard"

    const dashboardRoutes = {
      learner: "/dashboard/learner",
      teacher: "/dashboard/teacher",
      mentor: "/dashboard/mentor",
      admin: "/dashboard/admin",
    }

    return dashboardRoutes[user.role as keyof typeof dashboardRoutes] || "/dashboard"
  }

  const getRoleBadgeColor = (role: string) => {
    const colors = {
      learner: "bg-blue-500",
      teacher: "bg-emerald-500",
      mentor: "bg-purple-500",
      admin: "bg-red-500",
    }
    return colors[role as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RefEd Bridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-primary">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Auth & Theme */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <p className="text-sm font-medium">{user.name}</p>
                    <Badge className={`text-xs ${getRoleBadgeColor(user.role)} text-white`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </div>
                </div>

                <Link href={getDashboardLink()}>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>

                <Button variant="outline" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* User Info (Mobile) */}
                  {isAuthenticated && (
                    <div className="pb-4 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <Badge className={`text-xs ${getRoleBadgeColor(user.role)} text-white`}>
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Links */}
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Auth Buttons (Mobile) */}
                  <div className="pt-4 border-t space-y-2">
                    {isAuthenticated ? (
                      <>
                        <Link href={getDashboardLink()} className="block">
                          <Button
                            variant="outline"
                            className="w-full justify-start bg-transparent"
                            onClick={() => setIsOpen(false)}
                          >
                            <Settings className="h-4 w-4 mr-2" />
                            Dashboard
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-transparent"
                          onClick={() => {
                            logout()
                            setIsOpen(false)
                          }}
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link href="/login" className="block">
                          <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                            Sign In
                          </Button>
                        </Link>
                        <Link href="/register" className="block">
                          <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Get Started
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
