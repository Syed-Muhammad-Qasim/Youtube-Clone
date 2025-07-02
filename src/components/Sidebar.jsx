import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:block pt-16 bg-white h-full w-[175px] lg:w-[200px] xl:w-[225px] sticky top-0">
      <div className="flex flex-col  bg-white border-b-2  border-gray-200">
        <div className="flex items-center gap-4 px-6 py-2 bg-gray-100 rounded-l-full rounded-r-none hover:bg-gray-300">
          <img src="/homeicon.svg" alt="" /> Home
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/shortsicon.svg" alt="" /> Shorts
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/subscriptionicon.svg" alt="" /> Subscription
        </div>
      </div>
      <div className="flex flex-col  bg-white border-b-2  border-gray-200">
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/historyicon.svg" alt="" /> History
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/playlistsicon.svg" alt="" /> Playlists
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/yourvideosicon.svg" alt="" /> Your Videos
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/watchlatericon.svg" alt="" /> Watch Later
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/likedvideoicon.svg" alt="" /> Liked Videos
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/downloadicon.svg" alt="" /> Downloads
        </div>
      </div>
      <div className="flex flex-col  bg-white border-b-2  border-gray-200">
        <h1 className="text-lg font-semibold px-4 py-2 pt-4">Explore</h1>
        <div className="flex items-center gap-4 px-6 py-2 bg-gray-100 rounded-l-full rounded-r-none hover:bg-gray-300">
          <img src="/trendingicon.svg" alt="" /> Trending
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/musicicon.svg" alt="" /> Music
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/gamingicon.svg" alt="" /> Gaming
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/newsicon.svg" alt="" /> News
        </div>
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/sportsicon.svg" alt="" /> Sports
        </div>
      </div>
      <div className="flex flex-col  bg-white border-b-2  border-gray-200">
        <div className="flex items-center gap-4 px-6 py-2 rounded-l-full rounded-r-none bg-gray-100 hover:bg-gray-300">
          <img src="/settingsicon.svg" alt="" /> Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
