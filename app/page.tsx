'use client'
import ArticleCard from "./components/ArticleCard";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center">
      <nav className="flex flex-row space-x-8 pt-4 mr-auto ml-8 justify-start">
        <div className="font-semibold">RamaniAuthors</div>
        <div className="w-full">
          <Searchbar />
        </div>
      </nav>
      <section className=" w-full grid grid-cols-2 gap-4 p-4">
          <ArticleCard/>
         <ArticleCard/>
         <ArticleCard/>
         <ArticleCard/>
         <ArticleCard/>
      </section>
    </div>
  );
}
