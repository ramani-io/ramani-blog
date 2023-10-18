import React from "react";
import BlogPost from "./components/blog-post";
import Button from "./components/button";
import blogPosts from "./blogData";
function page() {
  
  return (
    <main className="flex w-full flex-col items-center justify-center gap-[100px]">
      <section className="flex flex-row flex-wrap items-center justify-center gap-[60px] px-[80px]">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            authorName={post.authorName}
            date={post.date}
            shares={post.shares}
            imageSrc={post.imageSrc}
            imageAlt={post.imageAlt}
            content={post.content}
          />
        ))}
      </section>

      <section className="w-[240px] ">
        <Button  text="Load More" />
      </section>
    </main>
  );
}

export default page;
