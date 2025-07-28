import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div>
      <Card className="max-w-[280px] p-2">
        <CardHeader className="p-2 pb-0 ">
          <div className="aspect-video rounded-xl bg-gray-100" />
        </CardHeader>
        <CardContent className="p-2">
          <span className="text-gray-500 text-xs">Project #1</span>
          <h3 className="text-gray-700 font-bold text-lg">Model</h3>
          <p className="text-gray-500 text-sm">Content goes here...</p>
        </CardContent>
        <CardFooter className="p-2 pt-0 flex justify-between">
          <Button>View all</Button>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
