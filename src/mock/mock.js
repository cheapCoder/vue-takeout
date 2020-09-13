import data from "./data.json"

// const Mock = require('mockjs');
import Mock from 'mockjs'

Mock.mock('/shopGoods', {code: 0, data.goods}) 
Mock.mock('/ShopInfo', {code: 0, data.info}) 
Mock.mock('/ShopRating', {code: 0, data.ratings}) 

console.log("mock is serve...");