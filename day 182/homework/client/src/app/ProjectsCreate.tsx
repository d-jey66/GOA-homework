import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  image: z.string().url({
    message: "Image must be a valid URL.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  type: z.string().min(2, {
    message: "Type must be at least 2 characters.",
  }),
  description: z.string(),
  companyId: z.string().uuid({
    message: "Company ID must be a valid UUID.",
  }),
  budget: z.string().min(0, {
    message: "Budget must be a positive number.",
  }),
  completion: z.string().min(0, {
    message: "Completion must be a positive number.",
  }),
  status: z.string({
    required_error: "Please select an email to display.",
  }),
  clerkUserId: z.string()
});

export default function ProjectsCreate() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      image: "",
      name: "",
      type: "",
      description: "",
      companyId: "",
      budget: "0",
      completion: "0",
      status: "canceled",
      clerkUserId:useUser().user?.id || ""
    },
  });
  console.log(useUser().user?.id)
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const port = 5000
    const host = "localhost"
    const sendData = await axios.post(`http://${host}:${port}/api/project/create-project`, data);
    console.log(sendData)
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-6"
      >
        <FormField
          control={form.control}
          name="status"
          defaultValue={"canceled"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="working">working</SelectItem>
                  <SelectItem value="canceled">canceled</SelectItem>
                  <SelectItem value="done">done</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
