import BallotIcon from '@mui/icons-material/Ballot'
import DialpadIcon from '@mui/icons-material/Dialpad'
import HomeIcon from '@mui/icons-material/Home'

import type { MenuItem } from './layout.types'


const MENU_ITEMS: MenuItem[] = [
    {
        id: 1,
        label: 'Home',
        path: '/',
        icon: <HomeIcon />,
    }, {
        id: 2,
        label: 'Text nine',
        path: '/text-nine',
        icon: <DialpadIcon />,
    }, {
        id: 3,
        label: 'Shop list',
        path: '/shop-list',
        icon: <BallotIcon />,
    },

]

export { MENU_ITEMS }
