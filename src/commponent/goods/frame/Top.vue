<template>
<div>
<div class="section"  v-for="item in listData" :key="item.id">
 
<!--子类-->
<div class="main-tit" >
    <h2>{{item.catetitle}}</h2>
    <p>
    
    <a href="/goods/43.html">
    {{item.catetitle}}</a>

    
    <a href="/goods/40.html">更多
    <i>+</i>
    </a>
    </p>
</div>
<!--/子类-->
<div class="wrapper clearfix">
<div class="wrap-box">
<ul class="img-list" >
 
<!-- <li v-for="item in listData" :key="item">
    <a href="/goods/show-91.html">
        <div class="img-box">
            <img :src="item.img_url">
        </div>
        <div class="info" v-for="item in listData.datas" :key="item">
            <h3></h3>
            <p class="price">
            <b>¥</b>元</p>
             <p>
                <strong>库存 10</strong>
                <span>市场价：
                <s>3150.00</s>
                </span>
         </p>
        </div>
    </a>
</li>  -->
 <li v-for="datae in item.datas" :key="datae.id">
     <a href="/goods/show-91.html" >
         <div class="img-box" >
             <img :src="datae.img_url">
         </div>
         <div class="info">
             <h3>{{datae.artTitle}}</h3>
             <p class="price">
                 <b>¥{{datae.sell_price}}</b>元</p>
             <p>
                 <strong>库存 {{datae.stock_quantity}}</strong>
                 <span>市场价：
                     <s>{{datae.market_price}}</s>
                 </span>
             </p>
         </div>
     </a>
 </li>
</ul>
</div>
</div>
</div>
</div>


</template>

<script>
export default {
  data() {
    return {
      listData: []
    };
  },
  //获取数据
  methods: {
    getListData() {
      this.$http.get(this.$api.goodsContent).then(rsp => {
        this.listData = rsp.data.message;
        console.log(this.listData);
      });
    }
  },

  created() {
    this.getListData();

    // console.log(datas);
  }
};
</script>

<style scoped>

</style>