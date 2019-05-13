<template>
    <div class="app_shoping">
        <div class="mui-card">
            <div class="mui-card-header">购物车</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-for="item in list" :key="item.id">
                    {{item.name}}&nbsp;  ¥ {{item.price}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="setSub(item.id)">-</button>
                        <input class="mui-input-numbox" type="number" :value="item.count"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="setAdd(item.id)">+</button> 
                    </div>
                </div>
            </div>
			<div class="mui-card-footer">
                小计: <span>¥ {{getsubtotal}}</span>
            </div>
		</div>
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
            setSub(id){
                for (var item of this.list){
                    if(item.id == id) {
                        if(item.count <= 1) break;
                        item.count --
                    }
                    
                }
            },
            setAdd(id){
                for (var item of this.list){
                    if(item.id == id) item.count ++
                }
            },
            getCartlist(){
                this.$http.get('cartlist/list').then(result=>{
                    this.list = result.data.msg
                    console.log(this.list)
                })
            }
        },
        created(){
            this.getCartlist();
        },
        computed:{
            getsubtotal:function(){
                var sum = 0;
                for (var item of this.list){
                    sum += item.price * item.count
                }
                return sum;
            }
        }
    }
</script>
<style scoped>
    
</style>