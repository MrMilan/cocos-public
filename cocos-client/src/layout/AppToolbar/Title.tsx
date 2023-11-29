import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'


const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Typography
        variant="h3"
        component={Link}
        color="inherit"
        href="/"
        fontWeight="bold"
        fontFamily="Segoe UI, Roboto, Helvetica Neue, sans-serif"
        sx={{
            textDecoration: 'none',
            flexGrow: 1,
        }}
    >
        {children}
    </Typography>
)

export { Title }
