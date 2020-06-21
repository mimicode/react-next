import { useRouter } from "next/router"

export default ()=>{

    const router = useRouter()

    let {id} = router.query

    return (
        <div>
             <h2>分类 ： {id}</h2>
        </div>
    )
}

//每次都请求数据 这里可以获取到参数
// export async function getServerSideProps(content) {
//     console.log("content[id]",content) 
//     return {
//         props:{
//             list:[]
//         }
//     }
// }

//返回可能的路径 
export async function getStaticPaths(){ 
    let paths = [
        {
            params:{
                id:"5b23a5aef265da59716fda09"
            }
        }
    ]; 
    return {
        paths:paths,
        fallback:false
    }
}
//请求动态数据 
export async function getStaticProps(content) {
    console.log("content,id",content)
    return {
        props:{
            list:[]
        }
    }
}
 