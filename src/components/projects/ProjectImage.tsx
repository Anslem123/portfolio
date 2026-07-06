"use client";

import { useState } from "react";
import Image from "next/image";
import { CodeIcon } from "@/components/ui/Icon";

interface ProjectImageProps {
  src:    string;
  alt:    string;
  sizes?: string;
  priority?: boolean;
}

export function ProjectImage({ src, alt, sizes, priority }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <Placeholder />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}

export function Placeholder() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[rgba(108,99,255,0.12)] border border-[rgba(108,99,255,0.2)] flex items-center justify-center">
          <CodeIcon size={26} className="text-[#6C63FF]" />
        </div>
      </div>
    </>
  );
}
