import useGifs from "hooks/useGifs";
import { useEffect, useRef } from "react";

export default function Visor() {
    const { nextPage } = useGifs();
    const visorRef = useRef();

    useEffect(() => {
        const onChangue = (entries) => {
            const el = entries[0];
            if (el.isIntersecting) {
                nextPage();
            }
        };

        Promise.resolve(
            typeof IntersectionObserver !== "undefined"
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            const observer = new IntersectionObserver(onChangue, {
                rootMargin: "450px",
            });
            observer.observe(visorRef.current);
        });
        
    }, [nextPage]);

    return <div ref={visorRef}></div>;
}
