import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { darken } from '@mui/material/styles'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'

import { COLOR_SILVER } from './keypad.constants'


const DialButton = styled(Button)`
    background-color: ${COLOR_SILVER};
    color: black;
    border-radius: 50%;
    min-width: 6em;
    &:hover, &.Mui-hovered {
        background-color: ${darken(COLOR_SILVER, 0.15)};
    }
`

type Props = {
    keyNumber: number
    keyStrings: string[]
    onKeyClick: (keyValue: string) => void
}

const DialKey: React.FC<Props> = ({ keyNumber, keyStrings, onKeyClick }) => (
    <DialButton
        onClick={() => onKeyClick(keyNumber.toString())}
        variant="contained"
    >
        <Stack>
            <Typography variant="body2">
                {keyNumber}
            </Typography>
            <Typography variant="body2">
                {keyStrings}
            </Typography>
        </Stack>
    </DialButton>
)

export { DialKey }
