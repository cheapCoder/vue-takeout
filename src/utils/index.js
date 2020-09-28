import Vue from "vue"

export function saveFoodCar(shopId, shopCar) {
  // console.log(shopCar);
  let foodObj = shopCar.reduce((pre, val) => {
    pre[val.id] = val.count
    return pre;
  }, {})
  if (JSON.stringify(foodObj) != "{}") {
    let allShopCar = JSON.parse(sessionStorage.getItem("allShopCar")) || {};
    allShopCar[shopId] = foodObj;
    sessionStorage.setItem("allShopCar", JSON.stringify(allShopCar));
  }
  // console.log(allShopCar);
}

export function getFoodCar(shopMsg) {
  let shopCar = [];
  const allShopCar = JSON.parse(sessionStorage.getItem("allShopCar")) || [];
  // if (!(JSON.stringify(allShopCar) === "[]" && allShopCar[shopMsg.id])) {
  //   return []
  // }
  const thisShopCar = allShopCar[shopMsg.id] || {}
  shopMsg.goods.forEach((good) => {
    good.foods.forEach((food) => {
      if (thisShopCar[food.id]) {
        Vue.set(food, "count", thisShopCar[food.id]);
        shopCar.push(food,)
      }
    })
  })
  return shopCar;
}