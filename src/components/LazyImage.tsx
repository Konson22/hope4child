import { useState, useRef, useEffect } from 'react';


export function LazyImage({ src, alt}:{ src:string; alt:string;}){
    const [shouldLoad, setShouldLoad] = useState(false);
    const placeholderRef = useRef(null);
    useEffect(()=>{
        if(!shouldLoad && placeholderRef.current){
            const observer = new IntersectionObserver(([{intersectionRatio}])=>{
            if(intersectionRatio > 0){
                setShouldLoad(true);
            }
        });

        observer.observe(placeholderRef.current);
            return () => observer.disconnect();
        }
    }, [shouldLoad, placeholderRef]);

    return (
        !shouldLoad ? <img src={process.env.PUBLIC_URL+`${src}`} alt={alt} /> : 
        <div className="">
            <img src={process.env.PUBLIC_URL+'/images/placeholder-large.png'} alt="" />
        </div>
    );
};
