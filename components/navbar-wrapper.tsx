import { auth } from "@/auth";
import Navbar from "./navbar";

export default async function NavbarWrapper(){
    const session = await auth()

    console.log(session)
    return (
        <Navbar session={session}/>
    )
}