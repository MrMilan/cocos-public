import type { ShopItem, ShopItemKeys } from '../shopList.types'


const getLabelFromKey = (keyString: string) => {
    const splittedWithSpace = keyString.replace(/([A-Z])/g, ' $1')
    return (
        splittedWithSpace.charAt(0).toUpperCase() +
        splittedWithSpace.slice(1).toLowerCase()
    )
}


const getStringValue = (comparisonKey: ShopItemKeys, shopItem: ShopItem) => {
    const value = shopItem[comparisonKey]
    if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No'
    }
    return value.toString()
}
export { getLabelFromKey, getStringValue }