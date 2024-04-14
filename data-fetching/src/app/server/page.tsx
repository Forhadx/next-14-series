// import RefreshBtn from "@/components/refreshBtn";
import refreshHandler from "@/lib/revalidateFn";

async function getData() {
  // default
  // const res = await fetch("http://localhost:5000/users");

  // default
  // const res = await fetch("http://localhost:5000/users",{ cache: 'force-cache' });

  // no cache
  // const res = await fetch("http://localhost:5000/users", { cache: "no-store" });

  // revalidate in sec
  // const res = await fetch("http://localhost:5000/users", {
  //   next: { revalidate: 10 },
  // });

  // on demand revalidate
  const res = await fetch("http://localhost:5000/users", {
    next: { tags: ["user_list"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // console.log("res: ", res.json()); // can't print

  return res.json();
}

export default async function ServerPage() {
  const data = await getData();

  // const refreshHandler = async () => {
  //   revalidateTag("user_list");
  // };

  return (
    <div className="pt-10 pl-20">
      <h1>Server</h1>
      <ul>
        {data?.data.map((i: any, idx: number) => (
          <li key={idx}>{i?.id}</li>
        ))}
      </ul>

      <button onClick={refreshHandler}>refresh</button>
      {/* <RefreshBtn /> */}
    </div>
  );
}
