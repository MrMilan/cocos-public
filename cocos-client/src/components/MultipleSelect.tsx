import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

import type { Option } from '@/types/elements.types'
import type { SelectChangeEvent } from '@mui/material/Select/SelectInput'


type Props = {
    value: number[] | string[]
    label?: string
    options: Option[]
    onChange: (value: number[] | string[]) => void
}

const MultipleSelect: React.FC<Props> = ({ value, label, options, onChange }) => (
    <TextField
        label={label}
        variant="standard"
        SelectProps={{
            multiple: true,
            value: value.length === 0 ? options.map(option => option.id) : value,
            onChange: (event: SelectChangeEvent<unknown>) => onChange(event.target.value as []),
        }}
        select
        fullWidth
    >
        {
            options.map(option => (
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

export { MultipleSelect }
