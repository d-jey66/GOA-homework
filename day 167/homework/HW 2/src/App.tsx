import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <section className="max-w-5xl mx-auto grid gap-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to my web site</h1>
          <p className="text-gray-400">Built with React, Tailwind, and ShadCN</p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Input placeholder="Your name" className="bg-gray-800 text-white" />
              <Input placeholder="Email" className="bg-gray-800 text-white" />
              <Textarea placeholder="Message" className="bg-gray-800 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700">Send</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                This mini website showcases usage of ShadCN UI components, Tailwind
                styling, and a clean responsive design. It is designed to be minimal yet
                visually appealing.
              </p>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-sm text-gray-500">
           Built with shadCN        </footer>
      </section>
    </main>
  );
};

export default App;
