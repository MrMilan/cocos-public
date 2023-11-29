const required = (value: undefined | null | string) => {
    if (value == null || value === '') {
        return 'Field is required'
    }
    return undefined
}

const customValidation = (validationRule: (value: any) => boolean, validationMessage: string) => (value: any) =>
    value && validationRule(value) ? validationMessage : undefined

const number = (value: undefined | null | string | number) =>
    value && isNaN(Number(value)) ? 'Field take only number' : undefined

const minValue = (min: number) => (value: number) =>
    value && value < min ? `Number must be at least ${min}` : undefined

const maxValue = (max: number) => (value: number) =>
    value && value > max ? `Number must be less then ${max}` : undefined

const minLength = (min: number) => (value: string) =>
    value && value.length < min
        ? `Text must have min ${min} characters`
        : undefined

const maxLength = (max: number) => (value: string) =>
    value && value.length >= max
        ? `Text must have max ${max} characters or less`
        : undefined

const hasFileEvent = (event: React.ChangeEvent<HTMLInputElement>) => !!(event && event.target && event.target.files)

const isSelectedOneFile = (event: React.ChangeEvent<HTMLInputElement>) =>
    hasFileEvent(event) && event.target.files!.length < 2
        ? 'Select only one file'
        : undefined

const maxFileSize = (max?: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // value is in bytes in browser (1MB = 1048576 bytes)
    const maxBytes =
        max && isNaN(Number(max)) ? 10 * 1048576 : Number(max) * 1048576
    if (hasFileEvent(event) && event.target.files![0].size <= maxBytes) {
        return `File max size is ${maxBytes}MB`
    }
    return undefined
}

export {
    required,
    number,
    minValue,
    maxValue,
    minLength,
    maxLength,
    isSelectedOneFile,
    maxFileSize,
    customValidation,
}
