import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../components/custom/ProductCard/ProductCard";
import { ThemeToggle } from "@/components/custom/theme/ThemeToggle";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />

      <Button>pog</Button>
    </main>
  );
}
