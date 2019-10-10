import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {
    it('correct date', () => {
        const rightDate = "6 января, вт, 1970 год";
        const result = getDate(5 * 24 * 3600 * 1000);
        expect(result).toEqual(rightDate);
    });

    it('negative date', () => {
        const rightDate = "27 декабря, сб, 1969 год";
        const result = getDate(-5 * 24 * 3600 * 1000);
        expect(result).toEqual(rightDate);
    });

    it('undefined date', () => {
        const result = getDate();
        expect(result).toBeUndefined();
    });
});

