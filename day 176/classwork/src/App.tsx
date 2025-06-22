import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <SignedIn>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome, you're signed in!</h1>
          <Button>Click Me!</Button>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default App