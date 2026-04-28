import { getNewsDetailsById } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

export const generateMetadata =async({params})=>{
    const { id } = await params;
    const news = await getNewsDetailsById(id);

     return {
    title: news.title,
    description: news.details,
  }
}





const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "params");
  const news = await getNewsDetailsById(id);
  console.log(news, "news");
  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author info */}
          <div className="flex justify-between items-center bg-slate-200 p-4">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <CiShare2 />
              <CiBookmark />
            </div>
          </div>
          
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>
          <p className="">{news.details}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-2">
                <FcRating />
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-2">
                <FaEye />
                {news.total_view}
              </h2>
            </div>

            <Link href={`/category/${news.category_id}`}>
              <button className="btn bg-violet-500 text-white">See Other News <ArrowRight/></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
