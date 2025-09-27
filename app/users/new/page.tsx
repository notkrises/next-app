"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <Button variant={"secondary"} onClick={() => router.push("/users")}>
      Create
    </Button>
  );
};

export default NewUserPage;
