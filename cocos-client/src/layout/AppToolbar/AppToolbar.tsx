import AppBar from '@mui/material/AppBar'

import { MenuIcon } from './MenuIcon'
import { Title } from './Title'

import { RootToolbar } from '@/components/RootToolbar'


type Props = {
    onDrawerClick: () => void
}

const AppToolbar: React.FC<Props> = ({ onDrawerClick }) => (
    <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
        <RootToolbar>
            <MenuIcon onDrawerClick={onDrawerClick} />
            <Title>Cocos</Title>
        </RootToolbar>
    </AppBar>
)

export { AppToolbar }
