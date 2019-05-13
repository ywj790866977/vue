<template>
    <div class="app-goods-list">
        <div class="app-goods-item" v-for="item in list" :key="item.id" @click="getDetail(item.id)" >
            <!-- <router-link to="/home/goodsinfo"> -->
                <img :src="item.img_url" >
                <h1 class="title">{{item.title}}</h1>
            <!-- </router-link> -->
            
            <div class="info">
                <p class="price">
                    <span class="old">¥{{item.p_old}}</span>
                    <span class="now">¥{{item.p_now}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.sell}}件</span>
                </p>
            </div>
        </div>
        <!-- <div class="app-goods-item">
            <img src="http://localhost:3000/img/banner1.png" alt="">
            <h1 class="title">华为手机 p4000</h1>
            <div class="info">
                <p class="price">
                    <span class="old">¥4000.00</span>
                    <span class="now">¥3999.00</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩1件</span>
                </p>
            </div> 
        </div> -->
        <mt-button type="primary" size="large" @click="">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getGoodlist(){
                this.$http.get('goodslist/list').then(res=>{
                    // console.log(res.data.msg)
                    this.list=res.data.msg;
                })
            },
            getDetail(id){
                // console.log(id);
                this.$router.push({path:"/home/goodsinfo/"+id})
                //编程导航1；
                // this.$router.push('/home/goodsinfo');
                //编程导航2
                // this.$router.push({path:"/home/goodsinfo"})
                //编程到场3
                // this.$router.push({name:"goodsinfo"})
            }
        },
        created(){
            // console.log(123)
            this.getGoodlist();
        }
    }
</script>
<style scoped>
    .app-goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        /* border:1px solid  red; */
    }
    .app-goods-list .app-goods-item{
        width: 49%;
        height: 320px;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }
   
    .app-goods-list .app-goods-item img{
        width:100%;
    }
    .app-goods-list .app-goods-item .title{
        font-size: 0.9rem;
        padding-top: 10px;
        color: #000;
    }
    
    .app-goods-list .app-goods-item .info{
        background: #eee;
    }
    .app-goods-list .app-goods-item .info .p{
        margin:0;
        padding: 5px;
    }
    .app-goods-list .app-goods-item .info .price .old{
        color:red;
        font-size: 1rem;
        font-weight: bold;
        margin: 0 10px 0 0;
    }
    .app-goods-list .app-goods-item .info .price .now{
        font-size: 0.8rem;
        text-decoration: line-through;
    }
    
    .app-goods-list .app-goods-item .info .sell{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        font-size: 0.8rem;
    }
</style>