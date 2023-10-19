// components/BlogPost.tsx

import React from "react";
import Image from "next/image";

interface BlogPostProps {
  title: string;
  authorName: string;
  date: string;
  shares: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  authorName,
  date,
  shares,
  imageSrc,
  imageAlt,
  content,
}) => {
  return (
    <div className="flex flex-col gap-[18px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={595}
        height={320}
      />
      <h1 className="font-proxima-nova text-gray inline-block h-[56.44px] w-[324.16px] text-left text-[31.72px] font-thin leading-[30.21px]">
        {title}
      </h1>
      <div className="justify-left flex flex-row items-center gap-6">
        <Image
          src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
          alt="Picture "
          width={30}
          height={30}
          className="relative h-[30.21px] w-[30.21px] rounded-[50%] object-cover"
        />
        <h2 className=" font-proxima-nova text-left text-[14.13px] leading-[30.21px] text-black">
          {authorName}
        </h2>
        <h3 className="font-proxima-nova text-left text-[13.59px] leading-[30.21px] text-gray-500">
          {date}
        </h3>
        <h3 className="font-proxima-nova text-left text-[13.59px] leading-[30.21px] text-gray-500">
          {shares}
        </h3>
      </div>
      <div className="font-proxima-nova text-dimgray inline-block h-[68.02px] w-[397.25px] text-left text-[14px] leading-[149.69%]">
        <p>{content}</p>
      </div>
      <div className="font-proxima-nova text-gray border-black text-left text-[18.13px] leading-[30.21px]">
        <h3 className="underline underline-offset-8">View Post</h3>
      </div>
    </div>
  );
};

export default BlogPost;
