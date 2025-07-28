import { UserButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

export default function App(){
    return(
        <Button>
            <UserButton/>
            click
        </Button>
    )
}