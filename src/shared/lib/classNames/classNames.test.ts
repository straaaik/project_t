import { classNames } from './classNames';

describe('classNames', () => {
    test('class + additional', () => {
        expect(
            classNames('someClass', {}, ['class1', 'class2', 'class3'])
        ).toBe('someClass class1 class2 class3');
    });
    test('class + additional + mods', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
                'class3',
            ])
        ).toBe('someClass class1 class2 class3 hovered scrollable');
    });
    test('class + additional + mods 1 false', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
                'class3',
            ])
        ).toBe('someClass class1 class2 class3 hovered');
    });
    test('class + additional + mods 1 undefined', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
                'class3',
            ])
        ).toBe('someClass class1 class2 class3 hovered');
    });
});
