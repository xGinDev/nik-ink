import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";
import Image from "next/image";
import Logo from "../public/header/Logo.svg";
import { ModeToggle } from "./DarkMode/Button";
import { Login } from "./Header/Login/page";
import { SearchBar } from "./Header/Search-bar/SearchBar";
export const dynamic = "force-dynamic";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full py-2 px-2 m-auto flex items-center justify-between sticky top-0 border-b-[1px] border-slate-800/20">
      <Image src={Logo} alt="Tattoo Logo" width={120} height={100} />
      <div className="w-6/12 min-[320px]:hidden lg:block">
        <SearchBar />
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Login />
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
