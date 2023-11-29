'use client'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { useState } from 'react'

import { useGetDictionary } from './data'
import { DialKeypad } from './keypad/DialKeypad'
import { ResultBox } from './ResultBox'
import { MAX_WIDTH_DIAL_WITH_INPUT } from './textNine.constants'
import { isItIntStringNumber } from './textNine.utils'

import { ClearableInput } from '@/components/ClearableInput'


const TextNinePageContainer: React.FC = () => {
    const [textNineQuery, setTextNineQuery] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const { fetchDictionary, wordsCombination, wordsCount } = useGetDictionary({ errors })

    const onKeypadClick = (keyValue: string) => {
        const resultValue = textNineQuery + keyValue
        setTextNineQuery(resultValue)
        fetchDictionary(resultValue)
    }

    const handleOnChange = (value: string) => {
        setErrors([])
        const errorMessage = isItIntStringNumber(value)
        if (errorMessage) {
            setErrors([errorMessage])
        }
        const parsedValue = value ?? ''
        setTextNineQuery(parsedValue)
        fetchDictionary(parsedValue)
    }

    return (
        <Grid
            container
            columnGap={4}
            rowGap={3}
            justifyContent="center"
        >
            <Grid
                item
                xs={12}
                md={4}
                lg={3}
            >
                <Stack
                    rowGap={2}
                    alignItems="center"
                >
                    <ClearableInput
                        value={textNineQuery}
                        onChange={handleOnChange}
                        variant="outlined"
                        sx={{ maxWidth: MAX_WIDTH_DIAL_WITH_INPUT }}
                        errorMessages={errors}
                        clearable
                    />
                    <DialKeypad onKeyClick={onKeypadClick} />
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
            >
                <ResultBox
                    words={wordsCombination}
                    count={wordsCount}
                />
            </Grid>
        </Grid>
    )
}

export { TextNinePageContainer }
