import { useState, useRef, useEffect } from 'react';
import { FaImage } from 'react-icons/fa'


export function LazyImage({ src, alt, cName}){
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
        // shouldLoad ? <img className={cName} src={`http://localhost:3001${src}`} alt={alt} /> : 
        shouldLoad ? <img className={cName} src={`https://amal-api.onrender.com${src}`} alt={alt} /> : 
            <div className={`flex items-center justify-center bg-gray-400 ${cName}`} ref={placeholderRef}>
                <FaImage className='icon' />
            </div>
    );
};
