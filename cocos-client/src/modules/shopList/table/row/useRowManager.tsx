import { useState } from 'react'

import type { ShopItem, ShopItemKeys } from '../../shopList.types'


const useRowManager = (shopItems: ShopItem[]) => {
    const [hiddenRows, setHiddenRows] = useState<ShopItemKeys[]>([])
    const comparisonKeys = Object.keys(shopItems.at(0)!).filter(key => key !== 'id') as Exclude<ShopItemKeys, 'id'>[]

    const hideRow = (comparisonKey: ShopItemKeys) => {
        setHiddenRows([...hiddenRows, comparisonKey])
    }

    const showRow = (comparisonKey: ShopItemKeys) => {
        setHiddenRows(hiddenRows.filter(hiddenRow => hiddenRow !== comparisonKey))
    }

    const resetHiddenRows = () => setHiddenRows([])


    return { comparisonKeys, hiddenRows, showRow, hideRow, resetHiddenRows }
}

export { useRowManager }