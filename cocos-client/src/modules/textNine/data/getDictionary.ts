import { api } from '@/api'


type QueryResult = {
    words: string[]
    wordCount: number
}

const getDictionary = async (query: string) => {
    const response = await api.post<QueryResult>('/dictionary', { query })
    return response?.responseData
}

export { getDictionary }