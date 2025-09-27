import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  searchParams: { sortOrder: string };
}

//page.tsx files are conventions which next.js looks for; thus is the only file than can be seen as a page
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new">
        <Button variant={"secondary"}>New User</Button>
      </Link>
      <Suspense fallback={<p>Loading...so wait the pog up bro</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
