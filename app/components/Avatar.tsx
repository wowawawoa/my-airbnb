"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      width={40}
      height={40}
      className="rounded-full"
      alt="Avatar"
    />
  );
};

export default Avatar;
