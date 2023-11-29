import request from "supertest";
import server from "../../src/server";


afterEach((done) => {
    server.close();
    done();
});

describe('POST convert server tests', () => {

    it('convert numbers to letter combinations and find "ahoj"', async () => {
        const response = await request(server)
            .post('/convert')
            .send({ query: '2465' })
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.countCombination).toEqual(81);
        expect(response.body.combination.includes('ahoj')).toBe(true)
    })

    it('fail with no query', async () => {
        const response = await request(server).post('/convert')
        expect(response.status).toEqual(400);
        expect(response.text).toEqual('Invalid input query: null assertion');
    })

    it('fails on no numbers', async () => {
        const response = await request(server)
            .post('/convert')
            .send({ query: 'abd' })
        expect(response.status).toEqual(400);
        expect(response.text).toEqual('Invalid input query: forbidden letters');
    })

})

describe('GET shop list', () => {

    it('full shop list', async () => {
        const response = await request(server)
            .get('/list')
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.count).toEqual(4);
        expect(response.body.items.some(cpu => cpu.title.startsWith('Intel'))).toBe(true)
    })

    it('filtered shop list', async () => {
        const response = await request(server)
            .get('/list')
            .query({ search: 'tel' })
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.count).toEqual(2);
        expect(response.body.items.every(cpu => cpu.title.startsWith('Intel'))).toBe(true)

    })

})
