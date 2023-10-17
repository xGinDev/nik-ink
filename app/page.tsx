import Home from "@/components/Home/Home";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: local } = await supabase.from("local").select();

  return (
    <div className="w-full flex flex-col items-center">
      <Home />
      <ul className="my-auto text-foreground">
        {local?.map((local) => (
          <div className="">
            <li key={local.id}>{local.name}</li>
            <li key={local.id}>{local.description}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
