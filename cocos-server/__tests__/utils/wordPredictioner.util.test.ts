import { keyBinding } from "../../src/common/constants";
import { combinator } from "../../src/utils/combinator.util";
import { wordPredictioner } from "../../src/utils/wordPredictioner.util";


describe('wordPredictioner utils test', () => {

    it('convert number 2665 to worlds', async () => {
        const combinations = combinator('665'.split(''), keyBinding[2])
        const offers = wordPredictioner(combinations)
        expect(['amok', 'book', 'cook', 'cool']).toEqual(offers);
    })

    it('convert number 43556 to worlds', async () => {
        const combinations = combinator('3556'.split(''), keyBinding[4])
        const offers = wordPredictioner(combinations)
        expect(['hello']).toBe(offers);
    })
})
