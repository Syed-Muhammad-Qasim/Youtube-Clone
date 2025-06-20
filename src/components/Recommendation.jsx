import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router";



const Recommendation = () => {
    const { id } = useParams();
    const API_KEY = "AIzaSyCXHWcJ5d7XQ-cxmNqVem5oaWPYN8H2DpE"
    const URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyCXHWcJ5d7XQ-cxmNqVem5oaWPYN8H2DpE"
   
   const [dataVideo , setDataVideo]= useState([]);
   
    const fetchvideo= async()=>{
    const response= await fetch(URL);
    const data= await response.json();
     console.log(data.items);
     setDataVideo(data.items);
    }
   
    useEffect(()=>{
     fetchvideo();
    },[])
   
    const CountConverter =(count)=>{
     if(count>1000000){
       return Math.floor(count/1000000)+"M";
     }else if(count>1000){
       return Math.floor(count/1000)+"K";
     }else{
       return count;
     }
   }



  return (

    
    <div className="bg-white  w-full h-[100%] flex flex-col gap-2 md:w-[50%] lg:w-[35%] xl:w-[40%] p-2">
          {dataVideo.map((item,index)=>{
            return(
                <li className="flex flex-col gap-2">
                <div key={index} className="bg-gray-100 w-[100%] h-[150px] hover:bg-gray-200 cursor-pointer  flex items-center rounded-xl">
                  <img
                    src={item?.snippet.thumbnails.medium.url}
                    alt=""
                    className="w-[40%] h-[150px] md:h-[150px] "
                  />
                  <div className="flex flex-col justify-center pl-2 pr-2 py-2 w-full overflow-hidden">
                    <h1 className="text-sm md:text-sm font-bold ">
                      {item?.snippet.title}
                    </h1>
                    <div className="flex flex-col">
                      <h1 className="text-sm md:text-sm text-gray-600 ">
                        {item?.snippet.channelTitle}
                      </h1>
                      <h1 className="text-sm md:text-sm  text-gray-600 ">
                        {CountConverter(item?.statistics.viewCount)} Views
                      </h1>
                    </div>
                  </div>
                </div>
                
              </li>
            )
          })}
          
        </div>
  )
}

export default Recommendation