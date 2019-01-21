import { assert, expect } from 'chai';
import { USER_TYPE, PRODUCT_TYPE} from '../src/js/config/settings';
import Product from '../src/js/Product';

describe('src/config/product.js', _=> {
    it('Check if same day', () => {
        const product = new Product(PRODUCT_TYPE.NEW, 20, new Date("2019-01-21"));
        assert.equal(true, product.publishedToday());
    });


});
