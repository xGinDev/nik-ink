import Messages from "./messages";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log in or sign up</DialogTitle>
        </DialogHeader>
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
          <form
            className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
            action="/auth/sign-in"
            method="post"
          >
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <button className="bg-primary rounded px-4 py-2 text-white mb-2">
              Sign In
            </button>
            {/* <button
              formAction="/auth/sign-up"
              className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
            >
              Sign Up
            </button> */}
            <Messages />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
