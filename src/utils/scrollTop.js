import { useEffect } from "react"

function scrollTop(top, pathname) {
  useEffect(()=>{
    window.scrollTo({
        top,
        behavior: "smooth"
    })
  }, [pathname])
}

export default scrollTop