import type { ShopItem, ShopItemFilter } from '../../shopList.types'


type FilterState = {
    shopList: ShopItem[],
    filteredShopList: ShopItem[],
    filters: ShopItemFilter
}

type FilterActionTypes = FilterActions['type']

type FilterActionUpdate = {
    type: 'UPDATE_FILTERS',
    payload: {
        filters: ShopItemFilter
    }
}

type FilterActionReset = {
    type: 'RESET_FILTERS',
}

type FilterActions = FilterActionUpdate | FilterActionReset

export type { FilterState, FilterActions, FilterActionTypes }