import instance from './axios'

export const reqAddress = async function (geohash) {
  const result = await instance(`/position/${geohash}`)
  if (result.code === 0) {
    return result.data;
  } 
}


export const reqFoodCategories = () => instance("/index_category")

export const reqShops = (latitude, longitude) => instance("/shops", {
  params: {
    latitude,
    longitude
  }
})