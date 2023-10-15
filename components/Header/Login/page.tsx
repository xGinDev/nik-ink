import { useState } from "react";
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
  const [resetPass, setResetPass] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Login</Button>
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
            <button className="bg-secondary rounded px-4 py-2 text-white mb-2">
              Sign In
            </button>
            <Messages />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
