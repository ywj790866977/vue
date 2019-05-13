<template>
    <div class="app">
        <!-- <h1>主页组件</h1> -->
        <!-- 1.轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" >
            </mt-swipe-item>
        </mt-swipe>
        <!-- 2. 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../img/menu1.png">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../img/menu2.png">
                    <!-- <span class="mui-badge">1</span> -->
                    <div class="mui-media-body">商品</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu3.png">
                    <div class="mui-media-body">购物车</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu4.png">
                    <div class="mui-media-body">支付</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu5.png">
                    <div class="mui-media-body">订单</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu6.png">
                    <!-- <span class="mui-badge">1</span> -->
                    
                    <div class="mui-media-body">联系</div>
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){ 
            return {
                list:[]
            } 
        },
        created(){
            this.getImageList()
        },
        methods: {
            getImageList(){
                var url='imagelist/list'
                this.$http.get(url).then(res=>{
                    if(res.data.code==1){
                        this.list=res.data.msg;
                        // console.log(res.data.msg)
                    }
                    
                    else
                        Toast("加载轮播图片失败...")
                })
            }    
        }
    }
</script>

<style scoped>
    /* 轮播 高度 */
    .app .mint-swipe{
        height:150px
    }
    .app .mint-swipe  img{
        width: 100%;
    }
    .mui-table-view.mui-grid-view{
        background-color: #fff;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell{
        border:0;
    }
    .mui-table-view-cell img{
        width: 50%;
    }
</style>