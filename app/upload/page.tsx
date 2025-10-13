"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="widgetUploadPreset">
      {({ open }) => <Button onClick={() => open()}>Upload</Button>}
    </CldUploadWidget>
  );
};

export default UploadPage;
