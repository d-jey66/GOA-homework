import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 text-white">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span>argon</span> | <span>chakra</span>
      </div>
      <div className="flex gap-4">
        <a href="#">Dashboard</a>
        <a href="#">Profile</a>
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </div>
      <Button variant="default">Free Download</Button>
    </nav>
  );
}
