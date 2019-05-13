<template>
    <div class="app-swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" >
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methodes:{},
        props:["list"]
    }
</script>
<style scoped>
    .app-swiper .mint-swipe{
        height:140px;
    }
    .app-swiper .mint-swipe .mint-swipe-items{
        text-align: center;
    }
    .app-swiper .mint-swipe img{
        width: 100%;
    }
</style>