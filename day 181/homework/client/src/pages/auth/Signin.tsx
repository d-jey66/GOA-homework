import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Signin() {
  const FormSchema = z.object({
    password: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    switch: z.boolean()
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      email: "",
      switch: false
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <div className="relative bg-[url(/assets/image.png)] bg-cover h-screen bg-center flex items-start justify-center bg-blue-100">
      <div className="absolute inset-0 bg-blue-400/80 " />

      <Card className="flex justify-center items-center absolute top-50 h-[614px] w-[453px]">
        <CardHeader className="w-[255px]">
          <CardTitle>Sign In With</CardTitle>
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
                  <FormItem className="h-[75px] w-[350px]">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Username" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="h-[75px] w-[350px]">
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter Username" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="switch"
                render={({ field }) => (
                  <FormItem className="h-[75px] w-[350px]">
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Switch
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-gray-700 w-full h-[45px] self-center rounded-[8px] text-white">
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            dont have account?{" "}
            <a href="/register" className="text-blue-400">
              Sign Up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
