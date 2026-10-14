'use client'
import { useEffect, useRef } from "react";
export default function VideoPlayer({vdoSrc, isPlaying}:{vdoSrc: string, isPlaying: boolean}){
    const videoRef = useRef<HTMLVideoElement>(null);

    const playVideo = () => {
        if(videoRef.current){
            videoRef.current.play();
        }
    }

    const pauseVideo = () => {
        if(videoRef.current){
            videoRef.current.pause();
        }    
    }

    useEffect(() => {
        if(isPlaying){
            playVideo();
        }
        else{
            pauseVideo();
        }
    }, [isPlaying]);

    return (
        <video ref={videoRef} className="w-[500px] h-[300px] object-cover" src={vdoSrc} controls loop muted />
    )
}