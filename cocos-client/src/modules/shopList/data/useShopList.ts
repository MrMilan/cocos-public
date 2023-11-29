import { useEffect, useState } from 'react'

import { getShopList } from './getShopList'

import type { ShopItem } from '../shopList.types'


const useShopList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [shopList, setShopList] = useState<ShopItem[]>([])

    useEffect(() => {
        const initState = async () => {
            const shopListResponse = await getShopList()
            setShopList(shopListResponse.items)
            setIsLoading(false)
        }

        initState()
        // I want call only on mounted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { isLoading, shopList }
}

export { useShopList }
