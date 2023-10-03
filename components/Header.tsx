import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";
import Image from "next/image";
import Logo from "../public/header/Logo.png";
import { ModeToggle } from "./DarkMode/Button";
export const dynamic = "force-dynamic";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex items-center justify-between">
      <Image src={Logo} alt="Tattoo Logo" width={100} height={100} />
      {user ? (
        <div className="flex items-center gap-4">
          Hey, {user.email}!
          <LogoutButton />
        </div>
      ) : (
        <Link href="/login" className="">
          Login
        </Link>
      )}
      <ModeToggle />
    </div>
  );
}
