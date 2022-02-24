import React from "react";
import Image from "next/image";

export default function Logo({ src }) {
  return (
    <div className="w-60 h-10 relative">
      <Image src={src} layout="fill" alt="Logo Company" priority />
    </div>
  );
}
