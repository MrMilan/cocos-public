import { keyBinding } from '../common/constants'


export const combinator = (numbers: readonly string[] = [], prevCombinations: string[] = []): string[] => {
    const combinations: string[] = []

    for (const prevCombination of prevCombinations) {
        for (const letter of keyBinding[numbers[0]]) {
            combinations.push(prevCombination.concat(letter))
        }
    }
    return numbers.length > 1
        ? combinator(numbers.slice(1), combinations)
        : combinations
}
