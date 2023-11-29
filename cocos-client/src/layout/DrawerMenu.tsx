import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { MENU_ITEMS } from './MenuItemsDefinition'

import { RootToolbar } from '@/components/RootToolbar'


type Props = {
    isDrawerOpen: boolean
}

const DrawerMenu: React.FC<Props> = ({ isDrawerOpen }) => (
    <Drawer
        open={isDrawerOpen}
        variant="persistent"
        PaperProps={{
            sx: {
                backgroundColor: ({ palette }) => palette.secondary.main,
                '.MuiSvgIcon-root, .MuiListItemText-root': {
                    color: ({ palette }) => palette.secondary.contrastText,
                },
                '.MuiTypography-root': {
                    fontSize: 'large',
                },
            },
        }}
    >
        <RootToolbar />
        <List>
            {MENU_ITEMS.map(menuItem => (
                <ListItem
                    key={menuItem.id}
                    disablePadding
                >
                    <ListItemButton
                        href={menuItem.path}
                        sx={{
                            fontSize: '2em',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: ({ palette }) => palette.secondary.contrastText,
                            }}
                        >
                            {menuItem.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {menuItem.label}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Drawer>
)

export { DrawerMenu }
