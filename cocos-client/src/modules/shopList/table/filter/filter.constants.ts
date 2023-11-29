import type { ShopItemFilter } from '../../shopList.types'
import type { Option } from '@/types/elements.types'


const CORES_OPTIONS: Option[] = [
    {
        id: 6,
        label: 6,
    },
    {
        id: 8,
        label: 8,
    },
    {
        id: 10,
        label: 10,
    },
    {
        id: 12,
        label: 12,
    },
]


const DEFAULT_FILTERS: ShopItemFilter = {
    name: '',
    cores: [],
    tdp: 65,
    hasOemCooler: undefined,
    hasOverclock: undefined,
}

export { CORES_OPTIONS, DEFAULT_FILTERS }