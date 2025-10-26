import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../components/custom/ProductCard/ProductCard";
import { ThemeToggle } from "@/components/custom/theme/ThemeToggle";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <ThemeToggle />
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />

      <Button>pog</Button>
    </main>
  );
}
