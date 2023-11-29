import { keyBinding } from "../../src/common/constants";
import { combinator } from "../../src/utils/combinator.util";


describe('combinator utils test', () => {

    it('convert number 22 to letter combinations', async () => {
        const expectedResult = ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"]
        const result = combinator(['2'], keyBinding[2])
        expect(result).toEqual(expectedResult);
    })

    it('convert number 2465 to letter combinations', async () => {
        const result = combinator('465'.split(''), keyBinding[2])
        expect(result.length).toEqual(81);
        expect(result.includes('ahoj')).toBe(true);
    })
})
