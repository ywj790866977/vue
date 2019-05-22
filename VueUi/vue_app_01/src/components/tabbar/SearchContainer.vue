<template>
    <div class="app_search">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<input type="text" placeholder="给母亲送最好del礼物">
                    <mt-button type="danger" size="small">搜索</mt-button>
				</div>
			</div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">搜索结果</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" >
                            <a href="#">
                                <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                                <div class="mui-media-body">
                                    华为 P30
                                    <p class='mui-ellipsis'>
                                        华为手机,爱国者产品
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
			<div class="mui-card-footer">
                页脚
            </div>
		</div>
    </div>
</template>
<script>
    export default {
        data(){ return {}}
    }
</script>
<style scoped>
    
</style>