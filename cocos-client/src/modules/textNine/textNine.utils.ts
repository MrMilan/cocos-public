import { customValidation } from '@/utils/validation.utils'



const isItIntStringNumber = (inputValue: string) => {
    const isNotIntegerRegExpRule = (value: string) => !/^(\d+)$/.test(value)
    const validateInput = customValidation(
        isNotIntegerRegExpRule,
        'Field must contain integer!',
    )
    const errorMessage = validateInput(inputValue)
    return errorMessage
}

export { isItIntStringNumber }