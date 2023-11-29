import { css, styled } from '@mui/material/styles'
import TableCell from '@mui/material/TableCell'


type StyledTableCellProps = {
    isTitle: boolean
}

const StyledTableCell = styled(TableCell, { shouldForwardProp:(propName)=> propName!=='isTitle' }) <StyledTableCellProps>`
        ${({ theme, isTitle }) => isTitle ?
        css`color: ${theme.palette.accent.main};
        font-weight: bold;
        font-size: large;
        ` : ''}
        `

export { StyledTableCell }