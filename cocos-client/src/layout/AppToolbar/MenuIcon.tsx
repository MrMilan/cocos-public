import MuiMenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'


type Props = {
    onDrawerClick: () => void
}

const MenuIcon: React.FC<Props> = ({ onDrawerClick }) => (
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        onClick={onDrawerClick}
    >
        <MuiMenuIcon />
    </IconButton>
)

export { MenuIcon }
