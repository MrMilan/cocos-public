type ShopItem = {
    id: number
    title: string
    generation: string
    cores: number
    socket: string
    tdp: number
    architekture: string
    oemCooler: boolean
    openOverclock: boolean
}

type ShopItemKeys = keyof ShopItem

type ShopItemFilter = {
    name: string
    hasOemCooler?: boolean
    hasOverclock?: boolean
    tdp: number
    cores: number[]
}

type OnHideRowClick = (comparisonKey: ShopItemKeys) => void

export type { ShopItem, ShopItemKeys, ShopItemFilter, OnHideRowClick }