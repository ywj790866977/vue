<template>
    <div class="app_subcomment">
        <!-- <h1>评论子组件</h1> -->
        <h1>发表评论</h1>
        <textarea name="pinglun"  cols="20" rows="3" placeholder="请输入评论的内容" v-model="msg"></textarea>
        <mt-button size="large"  type="primary" @click="postComment()">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-list-item" v-for="(item,i) in list" :key="item.id">
                <div class="cmt-title">
                        <span>第{{i+1}}楼 &nbsp;&nbsp; 用户:{{item.username}} 发表时间:{{item.ctime | dataFormat}}</span>
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
                
            </div>
            
        </div>
        <mt-button type="primary" size="large" @click="getCommentList()">加载更多..</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                list:[],
                pageIndex:0,
                msg:""
            }    
        },
        methods:{
            // getCommentList(){
            //     this.$http.get('newslist/comment?nid='+this.id).then(res=>{
            //         this.data=res.data.data;
            //         console.log(this.data)
            //     })
            // },
            getCommentList(){
                this.pageIndex++;
                // console.log(111)
                var url=`newslist/comment?pno=${this.pageIndex}&nid=${this.id}`;
                this.$http.get(url).then(res=>{
                    // console.log(res)
                    if(res.data.code==1){
                        Toast("获取成功")
                        this.list=this.list.concat(res.data.msg.data)
                        // console.log(res.data.msg)
                    }
                })
            },
            postComment(){
                var username="jerry";
                var nid=this.id;
                var content=this.msg;
                // console.log(content)
                // console.log(username+":"+nid+":"+content)
                var url='newslist/saveComment'
                
                this.$http.post(url,{nid,content,username}).then(res=>{
                    // console.log(res)
                    if(res.body.code == 1){
                        this.msg="";
                        Toast(res.body.msg);
                        this.pageIndex = 0;
                        this.list = [];
                        this.getCommentList();
                    }
                    else
                        Toast(res.body.msg);
                })
            }
        },
        created(){
            // this.getCommentList()
            // console.log(this.id)
            this.getCommentList()
        },
        props:["id"]
    }
</script>
<style scoped>
    .app_subcomment h1{
        font-size: 18px;
    }
    .app_subcomment textarea{
        margin:0;
    }
    .app_subcomment .cmt-list{
        margin: 5px 0;
    }
    .app_subcomment .cmt-list .cmt-list-item{
        font-size:13px;
    }
    .app_subcomment .cmt-list .cmt-list-item .cmt-title{
        line-height: 30px;
        background-color:#ccc;
    }
    .app_subcomment .cmt-list .cmt-list-item .cmt-body{
        line-height: 30px;
        text-indent:2rem
    }
</style>