"use client";
import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>An unexpected pog has occured. </div>{" "}
      <Button variant={"secondary"} onClick={() => reset()}>
        Retry
      </Button>
    </>
  );
};

export default ErrorPage;
