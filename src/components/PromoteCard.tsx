'use client'
import useWindowListener from "@/hooks/useWindowListener";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
export default function PromoteCard(){
    const [isPlaying, setIsPlaying] = useState(true);
    useWindowListener("contextmenu", (e) => {
        e.preventDefault();
    });
    return (
        <div className="flex flex-row gap-4 p-8 bg-[#f5e6cc] rounded-lg ">
            <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
            <div className="flex flex-col justify-between  px-8">
                <h3 className="text-2xl font-bold mb-4">Book your venue today</h3>
                <button className="w-[40%] bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded rounded-4xl" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"}</button>
            </div>
        </div>
    )
}