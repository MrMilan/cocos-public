'use client'

import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import { ComparisonHiddenAttributes } from './ComparisonHiddenAttributes'
import { ComparisonTableBody } from './ComparisonTableBody'
import { ComparisonFilters } from './filter/ComparisonFilters'
import { useFilteredShopList } from './filter/useFilteredShopList'
import { useRowManager } from './row/useRowManager'

import type { ShopItem, ShopItemFilter } from '../shopList.types'


type Props = {
    shopItems: ShopItem[]
}

const Table: React.FC<Props> = ({ shopItems }) => {
    const { comparisonKeys, hiddenRows, showRow, hideRow, resetHiddenRows } = useRowManager(shopItems)
    const [reducerState, dispatchFilter] = useFilteredShopList(shopItems)
    const { filteredShopList, filters } = reducerState

    const handleFiltersChange = (filters: ShopItemFilter) => dispatchFilter({ type: 'UPDATE_FILTERS', payload: { filters } })

    const handleResetFilters = () => dispatchFilter({ type: 'RESET_FILTERS' })

    return (
        <TableContainer component={Paper}>
            <ComparisonFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onResetFiltersClick={handleResetFilters}
            />
            <MuiTable sx={{ minWidth: 400 }}>
                <ComparisonTableBody
                    filteredShopList={filteredShopList}
                    comparisonKeys={comparisonKeys}
                    hiddenRows={hiddenRows}
                    onHideRowClick={hideRow}
                    onResetHiddenAttributesClick={resetHiddenRows}
                />
            </MuiTable>
            <ComparisonHiddenAttributes
                hiddenAttributes={hiddenRows}
                onShowRowClick={showRow}
            />
        </TableContainer>
    )
}

export { Table }
