import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { v4 as uuidV4 } from 'uuid'

import { getDictionary } from './getDictionary'

import type { WordDetail } from './data.types'


type Props = {
    errors: string[]
}

const useGetDictionary = ({ errors }: Props) => {
    const [wordsCombination, setWordsCombination] = useState<WordDetail[]>([])
    const [wordsCount, setWordsCount] = useState(0)

    const fetchDictionary = useDebouncedCallback(async (query: string) => {
        if (errors.length) {
            return
        }

        const result = await getDictionary(query)

        if (!result) {
            setWordsCombination([])
            setWordsCount(0)

            return
        }
        const words = result.words.map(word => ({ id: uuidV4(), word }))

        setWordsCombination(words)
        setWordsCount(result.wordCount)
    }, 500)

    return { wordsCombination, wordsCount, fetchDictionary }
}

export { useGetDictionary }
