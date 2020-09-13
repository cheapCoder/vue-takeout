import data from "./data.json"

// const Mock = require('mockjs');
import Mock from 'mockjs'

Mock.mock('/api/shopMsg', { code: 0, data })

console.log("mock is serve...");