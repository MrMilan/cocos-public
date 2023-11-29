import Router from 'koa-router'

import { keyBinding } from '../common/constants'
import { shopList as shopListData } from '../common/data'
import dictionary from '../common/dictionary.json'
import { combinator } from '../utils/combinator.utils'
import { wordPredictioner } from '../utils/wordPredictioner.utils'

import type {
    ConvertPostRequest,
    ConvertPostResponse,
    DictionaryPostRequest,
    DictionaryPostResponse,
    ListGetRequest,
    ListGetResponse,
} from '../types/endpoints'


export default new Router()

    .post('/convert', async (ctx) => {
        if (!ctx.request?.body) {
            ctx.throw(400, 'Invalid input query: no body')
            return
        }

        const { query }: ConvertPostRequest = ctx.request?.body
        if (query == null) {
            ctx.throw(400, 'Invalid input query: null assertion')
            return
        }

        const resultObj: ConvertPostResponse = { countCombination: 0, combination: [] }
        if (query.length) {
            const hasQueryInvalidLetters = !/^[0-9]*$/.test(query)
            if (hasQueryInvalidLetters) {
                ctx.throw(400, 'Invalid input query: forbidden letters')
                return
            }
            const numbers = query
            const firstCombinations = keyBinding[numbers[0]]
            if (numbers.length === 1) {
                resultObj.combination = firstCombinations
                resultObj.countCombination = firstCombinations.length
            } else {
                const combinations = combinator(numbers.slice(1).split(''), firstCombinations)
                resultObj.combination = combinations
                resultObj.countCombination = combinations.length
            }
        }
        ctx.response.body = resultObj
    })
    .get('/dictionary', async (ctx) => {
        ctx.response.body = JSON.stringify(dictionary)
    })
    .post('/dictionary', async (ctx) => {
        if (!ctx.request?.body) {
            ctx.throw(400, 'Invalid input query: no body')
            return
        }

        const { query }: DictionaryPostRequest = ctx.request?.body
        if (query == null) {
            ctx.throw(400, 'Invalid input query: null assertion')
            return
        }

        const resultObj: DictionaryPostResponse = { wordCount: 0, words: [] }
        if (query.length) {
            const hasQueryInvalidLetters = !/^[0-9]*$/.test(query)
            if (hasQueryInvalidLetters) {
                ctx.throw(400, 'Invalid input query: forbidden letters')
                return
            }
            const numbers = query
            const firstCombinations = keyBinding[numbers[0]]
            if (numbers.length === 1) {
                resultObj.wordCount = firstCombinations.length
                resultObj.words = firstCombinations
            } else {
                const combinations = combinator(numbers.slice(1).split(''), firstCombinations)
                const offers = wordPredictioner(combinations)

                resultObj.words = offers
                resultObj.wordCount = offers.length
            }
        }
        ctx.response.body = resultObj
    })

    .get('/list', async (ctx) => {
        const { search }: ListGetRequest = ctx.request?.query

        const resultObj: ListGetResponse = {
            items: [],
            count: 0,
        }
        if (!search?.length) {
            resultObj.items = shopListData
            resultObj.count = shopListData.length
        } else {
            resultObj.items = shopListData.filter(({ title }) =>
                title.toUpperCase().includes(search.toUpperCase())
            )
            resultObj.count = resultObj.items.length
        }
        ctx.response.body = resultObj
    })
