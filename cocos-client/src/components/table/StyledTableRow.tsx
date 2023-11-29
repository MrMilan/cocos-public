import common from '@mui/material/colors/common'
import styled from '@mui/material/styles/styled'
import TableRow from '@mui/material/TableRow'


const StyledTableRow = styled(TableRow)`
            color: ${common.black};
            background-color: ${({ theme }) => theme.palette.grey[100]};
            td, th {
                border-color: ${({ theme }) => theme.palette.grey[500]}
            }
            &:nth-of-type(odd) {
                color: ${common.black};
                background-color: ${common.white};
            }
            &:nth-of-type(n+2) td {
                border-left:  1px dotted ${({ theme }) => theme.palette.grey[500]};
            }
`

export { StyledTableRow }