import TableCell from '@mui/material/TableCell'

import { HeaderCell } from '../cell/HeaderCell'
import { StyledTableCell } from '../cell/StyledTableCell'
import { getStringValue } from '../table.utils'

import type { OnHideRowClick, ShopItem, ShopItemKeys } from '../../shopList.types'

import { StyledTableRow } from '@/components/table/StyledTableRow'


type Props = {
    comparisonKey: ShopItemKeys
    shopItems: ShopItem[]
    isTitle: boolean
    hideTitleCell: boolean
    onHideRowClick: OnHideRowClick
}

const ComparisonRow: React.FC<Props> = ({ comparisonKey, shopItems, isTitle, hideTitleCell, onHideRowClick }) => (
    <StyledTableRow>
        {hideTitleCell ?
            (
                <TableCell component="th" />
            ) :
            (
                <HeaderCell
                    value={comparisonKey}
                    onHideRowClick={onHideRowClick}
                />
            )
        }
        {
            shopItems.map(
                shopItem => (
                    <StyledTableCell
                        key={`${comparisonKey}-${shopItem.id}`}
                        isTitle={isTitle}
                    >
                        {getStringValue(comparisonKey, shopItem)}
                    </StyledTableCell>
                )
            )
        }
    </StyledTableRow>
)

export { ComparisonRow }
