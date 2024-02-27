import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const Login = () => {
  return (
    <div className="flex justify-center content-center w-screen h-screen">
      <div className="h-[300px]">
        <Card>
          <CardHeader>
            <h2>Create an account</h2>
            <p>Needed to use the platform.</p>
          </CardHeader>
          <CardContent>
            <div className="flex w-100 justify-center content-center">
              <Button>Github</Button>
              <Button>Google</Button>
            </div>
            <Separator />
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
