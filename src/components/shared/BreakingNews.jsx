import React from "react";
import Marquee from "react-fast-marquee";

const News = [
  {
    id: 1,
    title: "AI Revolution Continues to Reshape Global Tech Industry",
  },
  {
    id: 2,
    title: "Bangladesh Sees Rapid Growth in Startup Ecosystem in 2026",
  },
  {
    id: 3,
    title:
      "Major Cybersecurity Breach Highlights Need for Stronger Data Protection",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
      <button className="btn bg-red-500 text-white ">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {News.map((n)=>{
          return <span key={`${n.id}`}>{n.title}</span>
        })
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
