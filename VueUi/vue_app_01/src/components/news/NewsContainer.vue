<template>
    <div class="app_newslist">
        <!-- <h1>新闻列表</h1> -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/newsdetail/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{ item.ctime | dataFormat }}</span>
                            <span>点击:{{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <!-- <button type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="getMore()">Block button</button> -->
        <mt-button type="primary" size="large" @click="getMore()">加载更多..</mt-button>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        data(){
            return {
                list:[],
                pageIndex:0
            } 
        },
        created(){
            this.getMore()

        },
        methods: {
            getNewsList(){
            //     var url='newslist/list'
            //     this.$http.get(url).then(res=>{
            //         if(res.data.code==1)
            //             this.list=res.data.msg.data

            //     })
            },
            getMore(){
                this.pageIndex++;
                var url=`newslist/list?pno=${this.pageIndex}`;
                this.$http.get(url).then(res=>{
                    if(res.data.code==1){
                        Toast("获取成功")
                        this.list=this.list.concat(res.data.msg.data)

                    }
                })


                // 自己实现
                // var allCount=Math.ceil(this.all.pageCount/this.all.pageSize) //4
                // var pno=parseInt(this.all.pno)+1;
                // if(pno<=allCount){
                //     var url=`http://localhost:3000/newslist/list?pno=${pno}&pageCount=10`
                //     this.$http.get(url).then(res=>{
                //         if(res.data.code==1){
                //             for (var  item of res.data.msg.data)
                //                 this.all.data.push(item)
                //             this.all.pno=res.data.msg.pno
                //         }
                //     })
                // }
            }
        },
    }
</script>

<style scoped>
    .app_newslist .mui-table-view h1{
        font-size: 14px;
    }
    .app_newslist li .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between
    }
</style>