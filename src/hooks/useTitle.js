import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = "Dristy's Kitchen : "+title;
    },[title])
}
export default useTitle;