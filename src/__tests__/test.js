import { Magician, Daemon } from '../index';

describe('Magician', () => {
    test('test create Magician', () => {
        const obj = new Magician(400, 100);
        expect(obj.health).toBe(400);
        expect(obj.attack).toBe(100);
    });

    test('test function setStoned', () => {
        const obj = new Magician(400, 100);
        obj.setStoned(true);
        expect(obj.stoned).toBe(true)
    })

    test('test function getStoned after function setStoned', () => {
        const obj = new Magician(400, 100);
        obj.setStoned(true);
        expect(obj.getStoned()).toBe(true)
    })

    test('test function getStoned', () => {
        const obj = new Magician(400, 100);
        expect(obj.getStoned()).toBe(false);
    })

    test('testing function setAttack', () => {
        const obj = new Magician(400, 100);
        obj.setAttack(85)
        expect(obj.health).toBe(315);
    })

    test.each([
        [100, 11, 0],
        [100, 2, 90],
        [100, 0, 0],
        [100, 6, 50]
    ])('test function getAttack', (attack, distance, expected) => {
        const obj = new Magician(400, 100);
        expect(obj.getAttack(attack, distance)).toBe(expected);
    })

    test.each([
        [100, 11, 0],
        [100, 2, 85],
        [100, 0, 0],
        [100, 6, 37]
    ])('testing the function getAttack with stoned = true', (attack, distance, expected) => {
        const obj = new Magician(400, 100);
        obj.setStoned(true);
        expect(obj.getAttack(attack, distance)).toBe(expected);
    })
})

test('create new Daemon', () => {
    const obj = new Daemon(500, 120);
        expect(obj.health).toBe(500);
        expect(obj.attack).toBe(120);
})