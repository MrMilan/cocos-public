import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { NotificationFrame } from '@/components/NotificationFrame'
import { StyledTableRow } from '@/components/table/StyledTableRow'


type Props = {
    columns: number
    onResetClick: () => void
}

const ComparisonAllAttributesHiddenRow: React.FC<Props> = ({ columns, onResetClick }) => (
    <StyledTableRow>
        <TableCell colSpan={columns}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    rowGap={2}
                >
                    <NotificationFrame
                        type="info"
                        message="All parameters are hidden"
                        tip="Do you want show all them?"
                    />
                    <Button
                        variant="contained"
                        onClick={onResetClick}
                    >
                        Show them
                    </Button>
                </Stack>

            </Grid>
        </TableCell>
    </StyledTableRow>
)

export { ComparisonAllAttributesHiddenRow }
