import Grid from '@mui/material/Grid'

import { DialKey } from './DialKey'
import { getColumns } from './getColumns'
import { KEYS_BINDING } from './keypad.constants'

import type { OnKeyClick } from './keypad.types'


type Props = {
    rowCoefficient: number
    onKeyClick: OnKeyClick
}

const DialRowKeys: React.FC<Props> = ({ rowCoefficient, onKeyClick }) => (
    <>
        {
            getColumns(rowCoefficient).map(column => {
                const keyNumber = column + rowCoefficient
                return (
                    <Grid
                        key={keyNumber}
                        item
                    >
                        <DialKey
                            keyNumber={keyNumber}
                            keyStrings={KEYS_BINDING[keyNumber]}
                            onKeyClick={onKeyClick}
                        />
                    </Grid>
                )
            }
            )
        }
    </>
)

export { DialRowKeys }
