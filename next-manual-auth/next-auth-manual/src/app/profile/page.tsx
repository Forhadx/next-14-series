import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export async function getData() {
  const session = await getSession();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
    headers: {
      authorization: session.token,
    },
  });

  return res.json();
}

const ProfilePage = async () => {
  const session = await getSession();

  const user = await getData();
  console.log(user);

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b>{session.userName} </b>from session
      </p>

      <h2>From server fetch </h2>
      <p>id: {user?.data?.id}</p>
      <p>userName: {user?.data?.userName}</p>
      <p>age: {user?.data?.age}</p>
    </div>
  );
};

export default ProfilePage;
