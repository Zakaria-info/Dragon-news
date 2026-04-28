import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategorieId } from "@/lib/data";
import React from "react";



const CategoryPage = async ({ params }) => {
    const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCategorieId(id);

  
  return (
    <div className="container mx-auto my-15 grid grid-cols-12 gap-5">
      <div className=" col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className=" col-span-6">
        <h2 className="font-bold text-lg mb-7">News By Category</h2>
        <div className="space-y-3">
          {news.length> 0 ? news.map((n) => {
            return (
              <NewsCard  key={n._id} news={n}>
                {n.title}
              </NewsCard>
            );
          }): <h2 className="text-red-600 text-2xl text-center my-10">No news found!</h2>}
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default CategoryPage;
