import VisibilityIcon from '@mui/icons-material/Visibility'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'

import { getLabelFromKey } from '../table.utils'

import type { OnHideRowClick, ShopItemKeys } from '../../shopList.types'


type Props = {
    value: ShopItemKeys
    onHideRowClick: OnHideRowClick
}

const HeaderCell: React.FC<Props> = ({ value, onHideRowClick }) => {
    return (
        <TableCell
            sx={{ fontWeight: 'bold' }}
            component="th"
        >
            <Grid
                container
                alignItems="center"
                columnGap={1}
            >
                {getLabelFromKey(value)}
                <IconButton onClick={() => onHideRowClick(value)}>
                    <VisibilityIcon />
                </IconButton>
            </Grid>
        </TableCell>
    )
}

export { HeaderCell }
