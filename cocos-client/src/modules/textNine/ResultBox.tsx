import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import type { WordDetail } from './data/data.types'


type Props = {
    words: WordDetail[]
    count: number
}

const ResultBox: React.FC<Props> = ({ words, count }) => {
    return (
        <Stack>
            <Typography
                variant="h4"
                component="h3"
            >
                Server result ({count})
            </Typography>
            <List
                sx={{
                    listStyleType: 'disc',
                    paddingLeft: 4,
                }}
            >
                {
                    words.map(
                        wordDetail => (
                            <ListItem
                                key={wordDetail.id}
                                sx={{ display: 'list-item' }}
                            >
                                {wordDetail.word}
                            </ListItem>
                        )
                    )
                }
            </List>
        </Stack>
    )
}

export { ResultBox }
