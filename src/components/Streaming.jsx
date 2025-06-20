import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const Streaming = () => {
  const { id } = useParams();

  const API_KEY = "AIzaSyCXHWcJ5d7XQ-cxmNqVem5oaWPYN8H2DpE";
  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`;

  const [dataVideo, setDataVideo] = useState([]);

  const fetchvideo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.items);
    setDataVideo(data.items);
  };

  const com_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=25&videoId=${id}&key=${API_KEY}`;

  const [comdata, setComdata] = useState([]);
  const fetchcom = async () => {
    const response = await fetch(com_URL);
    const data = await response.json();
    console.log(data.items);
    setComdata(data.items);
  };

  useEffect(() => {
    fetchvideo();
    fetchcom();
  }, []);

  const CountConverter = (count) => {
    if (count > 1000000) {
      return Math.floor(count / 1000000) + "M";
    } else if (count > 1000) {
      return Math.floor(count / 1000) + "K";
    } else {
      return count;
    }
  };

  return (
    <div className="  w-[100%] h-[100%] bg-gray-100 md:h-[55%] md:w-[70%]  md:mx-0 md:my-0 lg:w-[65%]  xl:w-[60%] xl:h-[65%]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="w-[90%] h-[75%] mx-auto  mt-4 lg:w-[95%] lg:h-[80%] xl:w-[95%] xl:h-[%] "
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <h1 className="text-md font-bold px-6 w-[100%] h-[20%]">
        {dataVideo[0]?.snippet.title}
      </h1>
      <span className="flex justify-between items-center px-5 py-4">
        <span className="flex gap-2">
          <h1 className="text-sm text-gray-600">
            {CountConverter(dataVideo[0]?.statistics.viewCount)} Views
          </h1>
          <h1 className="text-sm text-gray-600">
            {dataVideo[0]?.snippet.publishedAt}
          </h1>
        </span>
        <span className="flex items-center gap-4">
          <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-[90px] rounded-full cursor-pointer text-sm font-medium flex items-center justify-center gap-2 py-1.5">
            <img src="/likeicon2.svg" alt="" />
            <h1 className="text-sm font-medium">
              {CountConverter(dataVideo[0]?.statistics.likeCount)}
            </h1>
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-[50px] rounded-full cursor-pointer text-sm font-medium flex items-center justify-center py-1.5">
            <img src="/unlikeicon.svg" alt="" />
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-[90px] rounded-full cursor-pointer text-sm font-medium flex items-center justify-center gap-2 py-1.5">
            <img src="/shareicon.svg" alt="" />
            <h1 className="text-sm font-medium">Share</h1>
            <img src="/shareicon2.svg" alt="" />
          </button>
        </span>
      </span>
      <span>
        <h1 className="text-sm font-bold text-gray-600 px-6">
          {CountConverter(dataVideo[0]?.statistics.commentCount)} Comments
        </h1>
      </span>

      {comdata.map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            <span className="hidden md:bg-white md:mx-6 md:mr-4 md:w-[95%] md:h-[100px] md:flex md:gap-2 md:p-3">
              <img
                src={
                  item?.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                className="w-8 h-8 rounded-full object-cover md:w-10 md:h-10 lg:w-12 lg:h-12"
                alt=""
              />
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-gray-800">
                    {item?.snippet.topLevelComment.snippet.authorDisplayName}
                  </h1>
                  <h1 className="text-sm text-gray-600">
                    {item?.snippet.topLevelComment.snippet.publishedAt}
                  </h1>
                </div>
                <h1 className="text-sm text-gray-800">
                  {item?.snippet.topLevelComment.snippet.textDisplay}
                </h1>
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Streaming;
