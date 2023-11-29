import type { KeyBindingDictionary } from './keypad.types'


const KEYS_BINDING: KeyBindingDictionary = {
    0: ['_'],
    1: ['.'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

const COLOR_SILVER = 'rgb(192, 192, 192)'

const DEFINITION_DIAL_COEFFICIENTS = [0, 3, 6, -1]

export { KEYS_BINDING, COLOR_SILVER, DEFINITION_DIAL_COEFFICIENTS }
