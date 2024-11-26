import { useEffect, useState } from 'react';

export default function UseMediaQuery (query){

    const [matches, setMatches] = useState(false);
    useEffect(()=>{
        const mediaList = window.matchMedia(query);
        if(mediaList.matches!==matches){
            setMatches(mediaList.matches);
        }

        const listener = () =>{
            setMatches(mediaList.matches);
        }
        window.addEventListener("resize", listener);

        return() => window.removeEventListener("resize", listener);
    },[matches,query]);

    return matches;

}