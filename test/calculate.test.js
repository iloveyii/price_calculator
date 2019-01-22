import { assert, expect } from 'chai';
import {USER_TYPE, PRODUCT_TYPE, REBATE, PRODUCT_TYPE_PRICES} from '../src/js/config/settings';
import Product from '../src/js/Product';
import User from '../src/js/User';
import CalculatePrice from '../src/js/CalculatePrice';

describe('src/CalculatePrice.jsce.js', _=> {
    it('Test rebate if product is new and published today rebate is ' + REBATE.PRODUCT_IS_NEW_AND_PUBLISHED_TODAY, () => {
        const price = 20;
        const product = new Product(PRODUCT_TYPE.NEW, price, new Date());
        const user = new User(USER_TYPE.NORMAL_USER);
        const expectedRebate = REBATE.PRODUCT_IS_NEW_AND_PUBLISHED_TODAY;
        assert.equal(expectedRebate, (new CalculatePrice(product, user)).rebate() );
    });

    it('Test price if product is new and published today', () => {
        const price = 20;
        const product = new Product(PRODUCT_TYPE.NEW, price, new Date());
        const user = new User(USER_TYPE.NORMAL_USER);
        const calculate = new CalculatePrice(product, user);
        const expectedPrice = price + PRODUCT_TYPE_PRICES[product.productType] - calculate.rebate(); // price + product_type_price - rebate
        assert.equal(expectedPrice, calculate.price() );
    });

    it('Test price if product is old and published today: 55', () => {
        const price = 20;
        const product = new Product(PRODUCT_TYPE.OLD, price, new Date());
        const user = new User(USER_TYPE.NORMAL_USER);
        const calculate = new CalculatePrice(product, user);
        const expectedPrice = price + PRODUCT_TYPE_PRICES[product.productType] - calculate.rebate(); // price + product_type_price - rebate
        assert.equal(expectedPrice, calculate.price() );
    });

    it('Test price if product is old and company user : 50', () => {
        const price = 20;
        const product = new Product(PRODUCT_TYPE.OLD, price, new Date());
        const user = new User(USER_TYPE.COMPANY_USER);
        const calculate = new CalculatePrice(product, user);
        const expectedPrice = price + PRODUCT_TYPE_PRICES[product.productType] - calculate.rebate(); // price + product_type_price - rebate
        assert.equal(expectedPrice, calculate.price() );
    });


});
