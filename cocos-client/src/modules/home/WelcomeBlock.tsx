import Typography from '@mui/material/Typography'

import { Container } from '@/components/Container'


const WelcomeBlock: React.FC = () => (
    <Container>
        <Typography
            component="h1"
            variant="h3"
        >
            Hello there. 😏
        </Typography>
        <Typography paragraph>
            Welcome to presentation page of Milan Polacek. There is currently only
            few example. It is a page with list of shop items and text nine predictor.
        </Typography>
    </Container>
)

export { WelcomeBlock }
