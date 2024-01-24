import Link from "next/link";

const Header = () => {
  return (
    <ul className="list-none flex gap-5 p-4">
      <li className="rounded-sm text-black">
        <Link href="/" className="py-2 px-4 bg-white">
          Home
        </Link>
      </li>
      <li className="rounded-sm text-black">
        <Link href="/server" className="py-2 px-4 bg-white">
          server side fetch
        </Link>
      </li>
      <li className="rounded-sm text-black">
        <Link href="/server-3" className="py-2 px-4 bg-white">
          server side fetch (3rd party)
        </Link>
      </li>
      <li className="rounded-sm text-black">
        <Link href="/client" className="py-2 px-4 bg-white">
          client side fetch
        </Link>
      </li>{" "}
      <li className="rounded-sm text-black">
        <Link href="/client-3" className="py-2 px-4 bg-white">
          client side fetch (3rd party)
        </Link>
      </li>
    </ul>
  );
};

export default Header;
