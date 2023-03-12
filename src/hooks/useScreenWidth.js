import { useEffect, useState } from "react";


export const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResizeWidth = () =>{
        setWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener("resize", handleResizeWidth);
      return () =>{
        window.removeEventListener("resize", handleResizeWidth);
      }
    
    }, [])
    
  return {
    width
  }
}
