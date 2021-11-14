import { useState, useEffect } from 'react'


/**
 * returns whether user is close to bottom of the page (exactly 452px close). 
 * After returns true it sets itself to false in the next cycle of life. 
 * @returns whether user is close to bottom of the page (Boolean)
 */
function useGetPageBottom(){
    const [atBottom, setAtBottom] = useState(false)
  
    console.log("useGetPageBottom is called");
  
  
    useEffect(()=>{
      function scrollEvent(){
        const htmlElement = document.documentElement
        const maxScroll = htmlElement.scrollHeight - htmlElement.clientHeight;
        if ((maxScroll - htmlElement.scrollTop) < 452 ){
          if(!atBottom){
            setAtBottom(true);
          }
        }
      }
  
      if(atBottom){
        setAtBottom(false);
      }
  
      document.addEventListener("scroll", scrollEvent);
  
      return ()=>document.removeEventListener("scroll", scrollEvent);
    }, [atBottom]);
  
      
    return atBottom;
  }

export default useGetPageBottom;