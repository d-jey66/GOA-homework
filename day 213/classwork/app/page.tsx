"use client"

import { useUser, UserButton } from "@clerk/nextjs"

export default function Home() {
  const { user } = useUser()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        GOA - Goal Oriented Academy
      </h1>
      <p className="text-gray-300 text-lg mb-6">
        The best programming academy in Georgia. Built by developers, for developers.
      </p>

      {user ? (
        <>
          <p className="mb-3 text-green-400">Welcome back, {user.firstName}!</p>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <div className="flex gap-4">
          <a
            href="/sign-in"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </main>
  )
}
