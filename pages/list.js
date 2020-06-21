import Link from "next/link"
import Axios from "axios"
// import dynamic from "next/dynamic"
import {Button} from "antd"
import { useState } from "react"
// import 'antd/dist/antd.css'
export default ({list})=>{
    console.log("list",list)

    // const moment = dynamic(()=>import("moment"))

    const [time,setTime]  = useState(Date.now())

    return (
        <div>
           <h2>
               <Link href="/">
                  <a>返回首页</a>
               </Link>
           </h2>
           <hr/>
           <p>query传参</p>
            <ul>
                {
                    list.map((data,index)=>{
                        return (
                            <li key={data._id}> <Link href={{pathname:"/detail/dddd",query:{id:data._id}}}><a>{data.title}</a></Link> </li>
                        )
                    })
                } 
            </ul>
            <hr/>
            <p>动态路由 单个参数</p>
            <ul>
            {
                    list.map((data,index)=>{
                        return (
                            <li key={data._id}> <Link href={{pathname:"/cate/[id]"}} as={`/cate/${data._id}`}><a>{data.title}</a></Link> </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <p>动态路由 多个参数</p>
            <ul>
            {
                    list.map((data,index)=>{
                        return (
                            <li key={data._id}> <Link href={{pathname:"/cate/[...id]"}} as={`/cate/${data.user}/${data._id}`}><a>{data.title}</a></Link> </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <p>动态加载</p> 
            <h3>时间是：{time}</h3>
            <Button onClick={ async ()=>{
               let moment = await import("moment")
                setTime( moment.default(Date.now()).format())

            }}>按钮</Button>

        </div>
        
    )
}

export async function getServerSideProps(content) {
    console.log("content[list]",content)
    let result = await Axios.get("https://xiaoce-timeline-api-ms.juejin.im/v1/getRecommendBooks?uid=&client_id=&token=&src=web&category=5562b410e4b00c57d9b94a92")
    // console.log(result.data)
    return {
        props:{
            list:result.data.d.data
        }
    }
}
 