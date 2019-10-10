import {configure, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Order from "./Order";
import {fakeOrders} from "../mock/fakeOrders";

configure({adapter: new Adapter()});

describe('Order component', () => {
    const wrapper = shallow(<Order key="test_key" order={{}}/>);

    it('render with default state DATE', () => {
        const order = {
            id: 123,
            date: 1544356800000,
            shop: 'Ali Express',
            items: [
                'Утиный пластмасса для показ новый год',
                'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
                'Новый стиль один розница яйцо для упаковки форма латекс',
            ]
        };
        wrapper.setProps({order: order});

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('no items', () => {
        const order = {
            id: 123,
            date: 1544356800000,
            shop: 'Ali Express',
        };
        wrapper.setProps({order: order});

        const items = wrapper.find('.Order-items').html();
        expect(items).toEqual("<div class=\"Order-items\"></div>");
    });

    it('no shop', () => {
        const order = {
            id: 123,
            date: 1544356800000,
            items: ['item1', 'item2'],
        };
        wrapper.setProps({order: order});

        const shop = wrapper.find('.Order-shop').html();
        expect(shop).toEqual("<span class=\"Order-shop\"></span>");
    });

    it('test shop', () => {
        const order = {
            id: 123,
            date: 1544356800000,
            shop: 'Ali Express',
            items: ['item1', 'item2'],
        };
        wrapper.setProps({order: order});

        const shop = wrapper.find('.Order-shop').html();
        expect(shop).toEqual("<span class=\"Order-shop\">Ali Express</span>");
    });
});