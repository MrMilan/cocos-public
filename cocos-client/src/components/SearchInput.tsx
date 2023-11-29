import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'

import { ClearableInput } from './ClearableInput'

import type { TextFieldProps } from '@mui/material/TextField'


type Props = {
    value: string
    label?: string
    clearable?: boolean
    onChange: (value: string) => void
} & Omit<TextFieldProps, 'onChange'>

const SearchInput: React.FC<Props> = ({ value, label, clearable = false, onChange, ...restProps }) => (
    <ClearableInput
        label={label}
        value={value}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
        clearable={clearable}
        onChange={onChange}
        variant="standard"
        fullWidth
        {...restProps}
    />
)

export { SearchInput }
