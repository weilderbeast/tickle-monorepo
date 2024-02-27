import { RegisterForm } from "./register-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Register = () => {
  return (
    <div className="flex w-screen h-screen relative">
      <div className="absolute top-8 left-8">
        <ModeToggle />
      </div>

      <div className="w-1/2 h-full bg-zinc-900 flex justify-center items-center">
        <h1 className="text-6xl font-bold">Tickle.</h1>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center flex-col p-8">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
          href="/login"
        >
          Login
        </a>
        <div className="w-[400px] mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-center">Register account</h1>
            <p className="text-muted-foreground text-center">
              Email & password, or Github & Google OAuth
            </p>
          </div>

          <div className="w-full flex justify-center">
            <RegisterForm />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <button
              className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full"
              type="button"
            >
              <FaGithub className="mr-2" />
              GitHub
            </button>
            <button
              className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-accent-foreground h-9 px-4 py-2 w-full"
              type="button"
            >
              <FcGoogle className="mr-2" />
              Google
            </button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="/terms"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="/privacy"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
