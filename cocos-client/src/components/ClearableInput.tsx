import CancelIcon from '@mui/icons-material/Cancel'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

import type { TextFieldProps } from '@mui/material/TextField'


type Props = {
    value: string
    label?: string
    clearable?: boolean
    errorMessages?: string[]
    onChange: (value: string) => void
} & Omit<TextFieldProps, 'onChange'>

const ClearableInput: React.FC<Props> = ({ value, label, clearable, InputProps, errorMessages, onChange, ...restProps }) => (
    <TextField
        label={label}
        value={value}
        error={!!errorMessages?.length}
        InputProps={{
            startAdornment: InputProps?.startAdornment,
            endAdornment: clearable && (
                <InputAdornment position="end">
                    <IconButton
                        sx={{
                            ml: 1,
                            '&.MuiButtonBase-root:hover': {
                                bgcolor: 'transparent',
                            },
                        }}
                        color="error"
                        onClick={() => onChange('')}
                    >
                        <CancelIcon />
                    </IconButton>
                </InputAdornment>
            ),
        }}
        helperText={errorMessages?.join(' ')}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(event.target.value)}
        fullWidth
        {...restProps}
    />
)

export { ClearableInput }
