import Toolbar from '@mui/material/Toolbar'


const RootToolbar: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Toolbar
        sx={{
            padding: 2,
        }}
    >
        {children}
    </Toolbar>
)

export { RootToolbar }
