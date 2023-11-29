import type { ShopItem } from '../shopList.types'

import { api } from '@/api'


type QueryResult = {
    items: ShopItem[]
    count: number
}

const getShopList = async (searchTitle?: string) => {
    const query = searchTitle ? { search: searchTitle } : undefined
    const response = await api.get('/list', query)
    const responseData: QueryResult = response?.responseData
    return responseData
}

export { getShopList }