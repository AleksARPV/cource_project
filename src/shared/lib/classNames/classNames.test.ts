import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('with only one parameter', () => {
        expect(classNames('someCls', {}, []))
            .toBe('someCls')
    })

    test('with additional classes', () => {
        const expected = 'someCls class1 class2'
        expect(classNames('someCls', {}, ['class1', 'class2']))
            .toBe(expected)
    })

    test('with mods and additional classes', () => {
        const expected = 'someCls class1 class2 hovered scrollable'
        expect(classNames('someCls', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe(expected)
    })

    test('with mods (false) and additional classes', () => {
        const expected = 'someCls class1 class2 hovered'
        expect(classNames('someCls', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe(expected)
    })

    test('with mods (undefined) and additional classes', () => {
        const expected = 'someCls class1 class2 hovered'
        expect(classNames('someCls', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe(expected)
    })
})
