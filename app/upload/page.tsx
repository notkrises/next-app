"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="an image" />
      )}
      <CldUploadWidget
        uploadPreset="widgetUploadPreset"
        onUpload={(result, widget) => {
          if (result.event != "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => <Button onClick={() => open()}>Upload</Button>}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
