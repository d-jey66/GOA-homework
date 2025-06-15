import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SocialButton } from "../components/SocialButton";
import { Facebook, Apple, Chrome } from "lucide-react";

// Define schema
const userSchema = z.object({
  _id: z.string(),
  avatar: z.string().url(),
  "user-name": z.string(),
  about: z.string(),
  "mobile-number": z.number(),
  email: z.string().email(),
  location: z.string(),
  role: z.object({
    type: z.enum(["manage", "programmer", "executive", "designer"]),
    position: z.enum(["organziation", "developer", "project", "ux/ui-designer"]),
  }),
  status: z.boolean(),
  social: z
    .array(
      z.object({
        name: z.string(),
        path: z.string().url(),
      })
    )
    .min(1, { message: "At least one social link required" }),
});

type UserFormType = z.infer<typeof userSchema>;

function SignIn() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      social: [{ name: "", path: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "social",
  });

  const onSubmit = (data: UserFormType) => {
    console.log("Submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-800 text-white flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg space-y-5">
          <h1 className="text-3xl font-bold text-center">Full User Form</h1>

          {/* Top Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="ObjectId" {...register("_id")} />
            <Input placeholder="Avatar URL" {...register("avatar")} />
            <Input placeholder="Username" {...register("user-name")} />
            <Input placeholder="Email" {...register("email")} />
            <Input placeholder="Mobile Number" type="number" {...register("mobile-number", { valueAsNumber: true })} />
            <Input placeholder="Location" {...register("location")} />
          </div>

          <div>
            <Input placeholder="About you" {...register("about")} />
          </div>

          {/* Role Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <select {...register("role.type")} className="bg-gray-800 p-2 rounded text-white">
              <option value="">Select Role Type</option>
              <option value="manage">Manager</option>
              <option value="programmer">Programmer</option>
              <option value="executive">Executive</option>
              <option value="designer">Designer</option>
            </select>

            <select {...register("role.position")} className="bg-gray-800 p-2 rounded text-white">
              <option value="">Select Position</option>
              <option value="organziation">Organization</option>
              <option value="developer">Developer</option>
              <option value="project">Project</option>
              <option value="ux/ui-designer">UX/UI Designer</option>
            </select>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center">
            <Switch {...register("status")} id="status" />
            <label htmlFor="status" className="ml-2">Active status</label>
          </div>

          {/* Social Links */}
          <div>
            <label className="block mb-2 font-medium">Social Links</label>
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-2 gap-2 mb-2">
                <Input placeholder="Platform (e.g. Twitter)" {...register(`social.${index}.name`)} />
                <Input placeholder="Link (https://...)" {...register(`social.${index}.path`)} />
                <div className="col-span-2">
                  <Button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-sm text-red-400 mt-1"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={() => append({ name: "", path: "" })}>
              Add Social
            </Button>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full mt-4">Submit</Button>

          {/* Errors */}
          {Object.values(errors).length > 0 && (
            <div className="text-red-400 text-sm">
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

export default SignIn;
