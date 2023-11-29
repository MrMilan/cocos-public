import TableBody from '@mui/material/TableBody'

import { ComparisonAllAttributesHiddenRow } from './row/ComparisonAllAttributesHiddenRow'
import { ComparisonNoDataRow } from './row/ComparisonNoDataRow'
import { ComparisonRow } from './row/ComparisonRow'

import type { OnHideRowClick, ShopItem, ShopItemKeys } from '../shopList.types'


type Props = {
    filteredShopList: ShopItem[]
    comparisonKeys: ShopItemKeys[]
    hiddenRows: ShopItemKeys[]
    onHideRowClick: OnHideRowClick
    onResetHiddenAttributesClick: () => void
}

const ComparisonTableBody: React.FC<Props> = ({ filteredShopList, comparisonKeys, hiddenRows, onHideRowClick, onResetHiddenAttributesClick }) => {
    const showAllAttributesHiddenCard = comparisonKeys.length - 1 === hiddenRows.length
    const hasData = !!filteredShopList.length
    const showNoDataRow = !filteredShopList.length

    return (
        <TableBody>
            {
                hasData && (
                    comparisonKeys.map(
                        comparisonKey => !hiddenRows.includes(comparisonKey) && (
                            <ComparisonRow
                                key={comparisonKey}
                                comparisonKey={comparisonKey}
                                shopItems={filteredShopList}
                                isTitle={comparisonKey === 'title'}
                                hideTitleCell={comparisonKey === 'title'}
                                onHideRowClick={onHideRowClick}
                            />
                        )
                    )
                )
            }
            {
                showNoDataRow && (
                    <ComparisonNoDataRow />
                )
            }
            {
                showAllAttributesHiddenCard && (
                    <ComparisonAllAttributesHiddenRow
                        columns={comparisonKeys.length + 1}
                        onResetClick={onResetHiddenAttributesClick}
                    />
                )
            }
        </TableBody>
    )
}

export { ComparisonTableBody }
