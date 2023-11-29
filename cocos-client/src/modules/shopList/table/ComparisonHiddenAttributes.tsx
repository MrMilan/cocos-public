import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { getLabelFromKey } from './table.utils'

import type { ShopItemKeys } from '../shopList.types'


type Props = {
    hiddenAttributes: ShopItemKeys[]
    onShowRowClick: (comparisonKey: ShopItemKeys) => void
}

const ComparisonHiddenAttributes: React.FC<Props> = ({ hiddenAttributes, onShowRowClick }) => (
    <Grid
        container
        alignItems="center"
        columnGap={1}
        padding={2}
        minHeight="3em"
    >
        <Typography
            variant="body2"
            fontWeight="bold"
        >
            Hidden attributes:
        </Typography>
        {
            hiddenAttributes.map(hiddenAttribute => (
                <Chip
                    key={hiddenAttribute}
                    label={getLabelFromKey(hiddenAttribute)}
                    onClick={() => onShowRowClick(hiddenAttribute)}
                />
            )
            )
        }
        {
            !hiddenAttributes.length && (
                <Typography
                    variant="body2"
                >
                    no hidden attributes
                </Typography>
            )
        }
    </Grid>
)

export { ComparisonHiddenAttributes }
