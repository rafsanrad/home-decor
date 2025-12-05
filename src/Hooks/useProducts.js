import axios from "axios"
import { useEffect, useState } from "react"

//this is a custom hook.
const useProducts=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{

        axios('../furnitureData.json') // ../ dibo taile kono error dibe na deploy e and routing e.
        .then(data=>setProducts(data.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    },[])
    return {products,loading,error}
}
export default useProducts;