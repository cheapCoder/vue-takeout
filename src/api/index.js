import instance from './axios'

export const reqAddress = async function (geohash) {
  return  instance(`/position/${geohash}`)
}

export const reqFoodCategories = () => instance("/index_category")

export const reqShops = (latitude, longitude) => instance("/shops", {
  params: {
    latitude,
    longitude
  }
})