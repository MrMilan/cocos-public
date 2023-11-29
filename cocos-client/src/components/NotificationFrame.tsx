import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


type Props = {
    type: 'info' | 'error' | 'success'
    message: string
    tip?: string
}

const NotificationFrame: React.FC<Props> = ({ type, message, tip }) => (
    <Stack
        rowGap={1}
    >
        <Grid
            container
            alignItems="center"
            columnGap={1}
            sx={{
                color: ({ palette }) => palette[type].contrastText,
                backgroundColor: ({ palette }) => palette[type].main,
                padding: 1,
                textAlign: 'center',
                borderRadius: 1,
            }}
        >
            {type === 'error' && (<ErrorIcon />)}
            {type === 'info' && (<InfoIcon />)}
            <Typography variant="body1" >
                {type === 'error' && 'Error message: '}
                {type === 'success' && 'Success message: '}
                {message}

            </Typography>
        </Grid>
        <Typography
            variant="subtitle2"
            sx={{ textAlign: 'center' }}
        >
            {tip && `Tip: ${tip}`}
        </Typography>
    </Stack>
)


export { NotificationFrame }