import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { userServise } from "@/servises/user.servise";
import { cookies, headers } from "next/headers";


export default async function Home() {
  
  const {data,error} = await userServise.getSession()


  return (
    <div>
      <Button>click me </Button>
    </div>
  );
}

