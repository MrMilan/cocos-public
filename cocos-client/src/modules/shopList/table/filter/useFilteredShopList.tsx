import { useReducer } from 'react'

import { DEFAULT_FILTERS } from './filter.constants'

import type { FilterActions, FilterState } from './filter.types'
import type { ShopItem, ShopItemFilter } from '../../shopList.types'


const filterItem = (filters:ShopItemFilter) => (shopItem: ShopItem) => {
    const appliedFilters = [
        filters.tdp <= shopItem.tdp,
        filters.name ? shopItem.title.includes(filters.name) : true,
        typeof filters.hasOemCooler === 'boolean' ? filters.hasOemCooler === shopItem.oemCooler : true,
        typeof filters.hasOverclock === 'boolean' ? filters.hasOverclock === shopItem.openOverclock : true,
        filters.cores.length ? filters.cores.includes(shopItem.cores) : true,
    ]
    return appliedFilters.every(filterValue => filterValue)
}

const appReducer = (state: FilterState, action: FilterActions) => {
    switch (action.type) {
        case 'UPDATE_FILTERS':
            return {
                ...state,
                filters: action.payload.filters,
                filteredShopList: state.shopList.filter(filterItem(action.payload.filters)),
            } satisfies FilterState
        default:
            return {
                shopList: state.shopList,
                filteredShopList: state.shopList,
                filters: DEFAULT_FILTERS,
            } satisfies FilterState
    }
}

const useFilteredShopList = (shopItems: ShopItem[]) => {
    const initialState: FilterState = {
        shopList: shopItems,
        filteredShopList: shopItems,
        filters: DEFAULT_FILTERS,
    }

    const filtersReducer = useReducer(appReducer, initialState)
    return filtersReducer
}

export { useFilteredShopList }