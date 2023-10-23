import React from "react";
import BlogPost from "./components/Blog-post";
import Button from "./components/Button";
import blogPosts from "./BlogData";
function page() {
  
  return (
    <main className="flex w-full flex-col items-center justify-center gap-[100px]">
      <section className="flex flex-row flex-wrap items-center justify-center gap-[60px] px-[80px] absolute top-[10em]">
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
        <div className="w-[240px] relative">
        <Button  text="Load More" />
      </div>
      </section>

      
    </main>
  );
}

export default page;
