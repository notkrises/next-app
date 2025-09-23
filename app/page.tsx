import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />

      <Button>pog</Button>
    </main>
  );
}
