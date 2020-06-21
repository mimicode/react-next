import { useRouter } from "next/router"

export default ()=>{

    const router = useRouter()
    
    let {id} = router.query
    console.log(id)
    return (
        <div>
             <h2>多参数 ： {id && id.length >0 ? id[0]:""} -  {id && id.length > 1 ? id[1]:""}</h2>
        </div>
    )
}