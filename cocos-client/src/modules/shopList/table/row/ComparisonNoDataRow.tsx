import Grid from '@mui/material/Grid'
import TableCell from '@mui/material/TableCell'

import { NotificationFrame } from '@/components/NotificationFrame'
import { StyledTableRow } from '@/components/table/StyledTableRow'


const ComparisonNoDataRow: React.FC = () => (
    <StyledTableRow>
        <TableCell>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <NotificationFrame
                    type="info"
                    message="No data"
                    tip="You can try update you filters."
                />
            </Grid>
        </TableCell>
    </StyledTableRow>
)

export { ComparisonNoDataRow }
