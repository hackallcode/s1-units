import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames, sortOrders, sortTypes} from './sortOrders';

describe('sortOrders function', () => {
    it('no orders', () => {
        let calls_count = 0;
        sortOrders(null, sortTypes.DATE);
        // TODO: Count calls
        expect(calls_count).toBe(0);
    });

    it('no sort type', () => {
        let calls_count = 0;
        sortOrders([{ date: 0, "items": [] }], undefined);
        // TODO: Count calls
        expect(calls_count).toBe(0);
    });

    it('sort by date', () => {
        let input = [
            { id: 124, date: 1552481120000 },
            { id: 126, date: 1552585550000 },
            { id: 123, date: 1544356800000 },
        ];
        const output = [
            { id: 126, date: 1552585550000 },
            { id: 124, date: 1552481120000 },
            { id: 123, date: 1544356800000 },
        ];
        sortOrders(input, sortTypes.DATE);
        expect(input).toEqual(output);
    });

    it('sort by count', () => {
        let input = [
            { id: 124, items: ['4', '2'] },
            { id: 126, items: ['1', '2', '3'] },
            { id: 123, items: ['3'] },
        ];
        const output = [
            { id: 123, items: ['3'] },
            { id: 124, items: ['4', '2'] },
            { id: 126, items: ['1', '2', '3'] },
        ];
        sortOrders(input, sortTypes.COUNT);
        expect(input).toEqual(output);
    });

    it('sort by item names', () => {
        let input = [
            { id: 124, items: ['4', '2'] },
            { id: 126, items: ['1', '2'] },
            { id: 123, items: ['3', '2'] },
            { id: 122, items: ['3', '2'] },
        ];
        const output = [
            { id: 126, items: ['1', '2'] },
            { id: 123, items: ['3', '2'] },
            { id: 122, items: ['3', '2'] },
            { id: 124, items: ['4', '2'] },
        ];
        sortOrders(input, sortTypes.ITEM_NAMES);
        expect(input).toEqual(output);
    });
});

describe('sortByItemNames function', () => {
    it('orders are null', () => {
        const result = sortByItemNames(null, null);
        expect(result).toEqual(0);
    });

    it('orders are not objects', () => {
        const result = sortByItemNames(0, 0);
        expect(result).toEqual(0);
    });

    it('orders has no items', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            not_items: ['1', '2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

    it('same items', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['item1', 'item2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

    it('asc sorted items', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['item2', 'item1'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(1);
    });

    it('desc sorted items', () => {
        const order1 = {
            items: ['item2', 'item1'],
        };

        const order2 = {
            items: ['item1', 'item2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(-1);
    });

    it('different count', () => {
        const order1 = {
            items: ['item1', 'item2', 'item3'],
        };

        const order2 = {
            items: ['item1', 'item2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(1);
    });
});

describe('sortByItemCount function', () => {
    it('orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('orders are not objects', () => {
        const result = sortByItemCount(0, 0);
        expect(result).toEqual(0);
    });

    it('orders has no items', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            not_items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('same items count', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('asc sorted items', () => {
        const order1 = {
            items: ['1'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(-1);
    });

    it('desc sorted items', () => {
        const order1 = {
            items: ['1', '2'],
        };

        const order2 = {
            items: ['1'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(1);
    });
});

describe('sortByDate function', () => {
    it('orders are null', () => {
        const result = sortByDate(null, null);
        expect(result).toEqual(0);
    });

    it('orders are not objects', () => {
        const result = sortByDate(0, 0);
        expect(result).toEqual(0);
    });

    it('orders has no date', () => {
        const order1 = {
            date: 1552481120000,
        };

        const order2 = {
            not_date: 1552585550000,
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

    it('same dates', () => {
        const order1 = {
            date: 1552481120000,
        };

        const order2 = {
            date: 1552481120000,
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

    it('asc sorted', () => {
        const order1 = {
            date: 1552481120000,
        };

        const order2 = {
            date: 1552585550000,
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(1);
    });

    it('desc sorted', () => {
        const order1 = {
            date: 1552585550000,
        };

        const order2 = {
            date: 1552481120000,
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(-1);
    });
});
