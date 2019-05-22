<template>
    <div class="app-goods-info">
	    <!-- 商品的轮播区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper-box :list="imagelist"></swiper-box>
				</div>
			</div>
		</div>
        <!-- 购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>￥{{info.p_old}}</del>
                            销售价：<span class="now_price">
                                ￥{{info.p_now}}
                            </span>
                        </p>
                        <p>
                            购买数量：
                            <div class="mui-numbox">
                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                                <input class="mui-input-numbox" type="number" v-model="num"/>
                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
                            </div>
                        </p>
					</div>
			    </div>
			<div class="mui-card-footer">
                <p>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger">加入购物车</mt-button>
                </p>
            </div>
		</div>
        <!-- 商品参数 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号: {{info.p_sn}}</p>
                        <p>商品类型: {{info.p_type}}</p>
                        <p>商品类型: {{info.p_type}}</p>
					</div>
			    </div>
			<div class="mui-card-footer">
                图文介绍  商品评论
            </div>
		</div>
    </div> 
</template>
<script>
    import swiper from '../subcomponents/swiper.vue'
    // import mui from '../../lib/mui/js/mui.js';
    export default {
        data(){
            return {
                imagelist:[],
                info:{},
                num:0
            }
        },
        methods:{
            goSub(){
                if(this.num <= 1) return;
                this.num = parseInt(this.num) - 1
            },
            goAdd(){
                if(this.num > 99) return;
                this.num = parseInt(this.num) + 1
            },
            findDetail(){
                this.$http.get('goodslist/find').then(res=>{
                    this.info=res.data
                    // console.log(this.info)
                })
            },
            getImageList(){
                var url='imagelist/list'
                this.$http.get(url).then(res=>{
                    if(res.data.code==1){
                        this.imagelist=res.data.msg;
                        // console.log(res.data.msg)
                    }
                    
                    else
                        Toast("加载轮播图片失败...")
                })
            }    
        },
        created(){
            this.findDetail();
            this.getImageList();
            // console.log(this.$route.params.id)
        },
        components:{
            'swiper-box':swiper
        }
        
    
    }
</script>
<style scoped>
    .now_price{
        color:red;
    }

</style>