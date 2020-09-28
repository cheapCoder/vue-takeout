// import data from "./data.json"
import shops from "./shops.json"

// const Mock = require('mockjs');
import Mock from 'mockjs'

// { code: 0, data }
Mock.mock(/^\/api\/shopMsg\/\d+$/,(options) => {
  const id = options.url.slice(13);
  const thisShop = shops.find((shop) => shop.id == id);
  return {
    code: 0,
    data: thisShop || shops[0]
  }
})

// console.log("mock is serve...");