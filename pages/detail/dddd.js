import Link from "next/link"
import Router,{useRouter, withRouter} from "next/router"

import styles from "./dddd.module.css"


export default withRouter(({router:url})=>{

    function onClickHandle(){
        router.push("/list")
    }
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h2>
                <Link href="/list"><a>返回列表页</a></Link>
            </h2>  
            <h2>
                 <button className={styles.btn} onClick={()=>onClickHandle()}>点击返回到列表</button> 
            </h2>  
            <hr/>
            详情页 id : {url.query.id}
        </div>
    )
})