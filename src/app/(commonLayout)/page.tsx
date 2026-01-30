import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";


export default async function Home() {
  const session = await authClient.getSession()
  return (
    <div>
      <Button>click me </Button>
    </div>
  );
}

