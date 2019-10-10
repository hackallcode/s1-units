// Array sort doc
// @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description

export const sortTypes = {
    ITEM_NAMES: 'names',
    DATE: 'date',
    COUNT: 'count',
};

/**
 * Функция сортировки заказов
 * @param {Array} orders - массив заказов
 * @param {string} sortType - выбранный тип сортировки
 */
export const sortOrders = (orders, sortType) => {
    if (!orders || !orders.length || !sortType) {
        return;
    }

    switch (sortType) {
        case sortTypes.DATE:
            orders.sort(sortByDate);
            break;
        case sortTypes.COUNT:
            orders.sort(sortByItemCount);
            break;
        case sortTypes.ITEM_NAMES:
            orders.sort(sortByItemNames);
            break;
    }
};

/**
 * Колбэк для сортировки массива закзаов
 * Сравнивает 2 заказа по именам товаров в заказе
 * @param {Object} order1
 * @param {Object} order2
 */
export const sortByItemNames = (order1, order2) => {
    if (typeof order1 !== 'object' || typeof order2 !== 'object') {
        return 0;
    }

    if (!order1 || !order2) {
        return 0;
    }

    const {items: items1} = order1;
    const {items: items2} = order2;

    if (!items1 || !items2) {
        return 0;
    }

    let result = 0;

    items1.forEach((item, i) => {
        if (item < items2[i]) {
            result = -1;
            return;
        }

        if (item > items2[i]) {
            result = 1;
            return;
        }
    });

    return result;
};

/**
 * Колбэк для сортировки массива заказов
 * Сравнивает 2 заказа по количеству товаров в заказе
 * по возрастанию
 * @param order1
 * @param order2
 */
export const sortByItemCount = (order1, order2) => {
    if (typeof order1 !== 'object' || typeof order2 !== 'object') {
        return 0;
    }

    if (!order1 || !order2) {
        return 0;
    }

    const {items: items1} = order1;
    const {items: items2} = order2;

    if (!items1 || !items2) {
        return 0;
    }

    switch (true) {
        case items1.length < items2.length:
            return -1;
        case items1.length === items2.length:
            return 0;
        default:
            return 1;
    }
};

/**
 * Колбэк для сортировки массива заказов
 * Сравнивает 2 заказа по дате
 * по убыванию (сначала новые заказы)
 * @param order1
 * @param order2
 */
export const sortByDate = (order1, order2) => {
    if (typeof order1 !== 'object' || typeof order2 !== 'object') {
        return 0;
    }

    if (!order1 || !order2) {
        return 0;
    }

    const {date: date1} = order1;
    const {date: date2} = order2;

    if (!date1 || !date2) {
        return 0;
    }

    switch (true) {
        case date1 < date2:
            return 1;
        case date1 > date2:
            return -1;
        default:
            return 0;
    }
};
