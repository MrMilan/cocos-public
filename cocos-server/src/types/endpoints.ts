import type { ShopItem } from './ShopItem'


type ConvertPostRequest = {
    /**
     * Query string of numbers
     */
    query?: string
}

type ConvertPostResponse = {
    countCombination: number
    combination: string[]
}

type DictionaryPostRequest = {
    /**
     * Query string of numbers
     */
    query?: string
}

type DictionaryPostResponse = {
    wordCount: number
    words: string[]
}

type ListGetRequest = {
    search?: string
}

type ListGetResponse = {
    items: ShopItem[]
    count: number
}


export type {
    ConvertPostRequest,
    ConvertPostResponse,
    DictionaryPostRequest,
    DictionaryPostResponse,
    ListGetRequest,
    ListGetResponse,
}