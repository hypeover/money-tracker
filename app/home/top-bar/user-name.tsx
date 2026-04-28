import { createClient } from "@/lib/supabase/server";

const UserName = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <p className="text-lg font-mediumn">Welcome, {user?.user_metadata.name}</p>
  );
};

export default UserName;
