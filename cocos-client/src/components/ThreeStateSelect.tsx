import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

import type { Option } from '@/types/elements.types'


const THREE_STATE_OPTIONS: Option[] = [
    {
        id: 'true',
        label: 'Yes',
    },
    {
        id: 'false',
        label: 'No',
    },
    {
        id: -1,
        label: 'Unset',
    },
]

type Props = {
    value?: boolean
    label?: string
    onChange: (value?: boolean) => void
}

const ThreeStateSelect: React.FC<Props> = ({ value, label, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value
        if (typeof value === 'number' && value === -1) {
            onChange(undefined)
            return
        }
        onChange(value === 'true')
    }

    return (
        <TextField
            label={label}
            value={typeof value === 'boolean' ? value.toString() : -1}
            variant="standard"
            select
            fullWidth
            onChange={handleChange}
        >
            {
                THREE_STATE_OPTIONS.map(option => (
                    <MenuItem
                        key={option.id}
                        value={option.id}
                    >
                        {option.label}
                    </MenuItem>
                )
                )
            }
        </TextField>
    )
}

export { ThreeStateSelect }
