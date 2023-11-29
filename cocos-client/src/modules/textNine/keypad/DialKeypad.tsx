import { MAX_WIDTH_DIAL_WITH_INPUT } from '../textNine.constants'

import { DialGridBoard } from './DialGridBoard'
import { DialRowKeys } from './DialRowKeys'
import { DEFINITION_DIAL_COEFFICIENTS } from './keypad.constants'

import type { OnKeyClick } from './keypad.types'


type Props = {
    onKeyClick: OnKeyClick
}

const DialKeypad: React.FC<Props> = ({ onKeyClick }) => {
    return (
        <DialGridBoard
            maxWidth={MAX_WIDTH_DIAL_WITH_INPUT}
            gridTemplateColumns="1fr 1fr 1fr"
            rowGap={1}
            columnGap={1}
            sx={{
                '& > :last-child': {
                    gridColumn: 2,
                },
            }}
        >
            {
                DEFINITION_DIAL_COEFFICIENTS.map(rowCoefficient => (
                    <DialRowKeys
                        key={rowCoefficient}
                        rowCoefficient={rowCoefficient}
                        onKeyClick={onKeyClick}
                    />
                ))
            }
        </DialGridBoard>
    )
}

export { DialKeypad }
