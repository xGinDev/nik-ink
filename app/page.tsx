import Home from "@/components/Home/Home";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies });

  const { data: locals } = await supabase.from("local").select();

  return (
    <div className="w-full flex flex-col items-center">
      <Home />
      <div className="my-auto text-foreground grid grid-cols-2 gap-4 lg:grid-cols-4">
        {locals?.map((local) => (
          <div className="">
            <h2 key={local.id}>{local.name}</h2>
            <p key={local.id}>{local.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
