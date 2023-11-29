import MuiContainer from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import type { ContainerProps as MuiContainerProps } from '@mui/material/Container'


type ContainerProps = {
    children: React.ReactNode
    sx?: MuiContainerProps['sx']
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => (
    <MuiContainer sx={sx}>
        <Stack spacing={3}>
            {children}
        </Stack>
    </MuiContainer>
)

export { Container }
