1. 商家页面第一次进入无法滚动商品和分类 (已解决)
    分析：`src/pages/Shop/ShopGoods.vue `必须等页面的数据`shopMsg`加载完成`new BScroll`才能让betterScroll正确管理完整数据
    <br>
2. 商家页面的分类部分有时候点击无响应