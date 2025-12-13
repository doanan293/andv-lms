import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="text-xl">
        Welcome back
        <CardDescription>Login with your Github Email</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>
          <GithubIcon className="size-4" />
          Sign in with Github
        </Button>
      </CardContent>
    </Card>
  );
}
