import { Switch } from "@/components/ui/switch";
import { Facebook } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Signup() {
  const FormScheme = z.object({
    username: z.string().min(6, {
      message: "Username must be at least 6 character",
    }),
    // only Georgia
    mobileNumber: z.number().min(9, {
      message: "Phone number must be at least 9 number",
    }),
    email: z.string().email(),
    rememberMe: z.boolean(),
    password: z.string().min(6, {
      message: "Phone number must be at least 6 number",
    }),
  });
  const form = useForm<z.infer<typeof FormScheme>>({
    resolver: zodResolver(FormScheme),
    defaultValues: {
      username: "davta",
      mobileNumber: 0,
      rememberMe: false,
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormScheme>) {
    console.log(data);
  }
  return (
    <div className="relative flex items-start justify-center h-screen pt-4">
      <div className="bg-[url(/assets/image.png)] bg-cover w-[98%] h-[50%] relative bg-center rounded-2xl">
        <div className="absolute inset-0 bg-blue-400/80 rounded-2xl" />
      </div>
      <Card className="flex justify-center items-center absolute top-50 h-[614px] w-[453px]">
        <CardHeader className="w-[255px]">
          <CardTitle>Register With</CardTitle>
          <CardDescription className="mt-4 flex gap-5 flex-col items-center">
            <div className="flex gap-5">
              <div className="border h-[75px] w-[75px] flex items-center justify-center rounded-sm">
                <Facebook className="size-8 bg-black rounded-4xl text-white p-1 m-1" />
              </div>
              <div className="border h-[75px] w-[75px] flex items-center justify-center rounded-sm">
                <Facebook className="size-8 bg-black rounded-4xl text-white p-1 m-1" />
              </div>
              <div className="border h-[75px] w-[75px] flex items-center justify-center rounded-sm">
                <Facebook className="size-8 bg-black rounded-4xl text-white p-1 m-1" />
              </div>
            </div>
            <h2 className="text-xl">or</h2>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5 *:text-xl"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="border h-11 p-4 w-full rounded-lg text-lg"
                  id="name"
                  name="name"
                  placeholder="Your Full Name Here"
                />
              </div>
              <div className="h-[75px] w-[350px]">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="border h-11 p-4 w-full rounded-lg text-lg"
                  id="password"
                  name="password"
                  placeholder="Your Password Here"
                />
              </div>
              <div className="flex items-center gap-5">
                <Switch className="" />
                <h1 className="text-sm">Remember Me</h1>
              </div>
              <Button type="submit" className="bg-gray-700 w-full h-[45px] self-center rounded-[8px] text-white">
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            dont have account?{" "}
            <a href="login" className="text-blue-400">
              Sign In
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
