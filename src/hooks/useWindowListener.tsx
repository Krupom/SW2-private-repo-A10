'use client'

import { useEffect } from "react";

export default function useWindowListener(eventName: string,  listener: EventListener) {
    useEffect(() => {
        window.addEventListener(eventName, listener);
        return () => {
            window.removeEventListener(eventName, listener);
        }
    }, []);
}