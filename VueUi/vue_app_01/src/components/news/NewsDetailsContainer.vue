<template>
    <div class="app_newdetail">
        <h1 class="title">{{newinfo.title}}</h1>
        <p class="subtitle">
            <span>发布时间：{{newinfo.ctime | dataFormat}}</span>
            <span>点击：{{newinfo.click}}次</span>
        </p>
        <div class="container" v-html="newinfo.content">    
        </div>
        <div>
           <comment-box :id="this.id"></comment-box>
        </div>
        
    </div>
</template>
<script>
    import comment from '../subcomponents/comment'
    export default {
        data(){
            return {
                id:this.$route.params.id,
                newinfo:{}
            } 
        },
        methods:{
            getNewsDetail(){
                // var id = this.$route.params.id;
                var url='newslist/find?id='+this.id;
                this.$http.get(url).then(res=>{
                    if(res.data.code==1){
                        this.newinfo=res.data.msg;
                        // console.log(this.newinfo)
                    }
                })
            }
        },
        created(){
            this.getNewsDetail();
        },
        components:{
            'comment-box':comment
        }
    }
</script>
<style scoped>
    .app_newdetail{
        padding: 0 4px;
    }
    .app_newdetail .title{
        font-size: 16px;
        text-align: center;
        color:dimgrey;
        margin-top: 15px;
    }
    .app_newdetail .subtitle{
        display: flex;
        justify-content: space-between;
        font-size:13px;
        color:#226aff;
    }
    .app_newdetail .container img{
        width:100%;
    }
</style>