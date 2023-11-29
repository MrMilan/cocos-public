import usDictionary from '../common/dictionary.json'


export const wordPredictioner = (combinations: string[] = []): string[] => {
    const offeredWords: string[] = combinations.flatMap(currentWord => {
        const sanitizedWord = currentWord.replace(/(\W|\s)/gi, '').toLowerCase()
        const key = sanitizedWord.slice(0, 2)
        const dictionary = usDictionary[key]?.filter(word => word === sanitizedWord) ?? []
        return dictionary
    })
    return offeredWords
}
