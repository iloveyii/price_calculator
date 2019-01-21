import { assert, expect } from 'chai';
import { USER_TYPE, PRODUCT_TYPE} from '../src/js/config/settings';

describe('src/config/settings.js', _=> {
    it('should have two user types ie company and normal', () => {
        expect(USER_TYPE).to.have.property('COMPANY_USER');
        expect(USER_TYPE).to.have.property('NORMAL_USER');
    });

    it('should have two product types ie new and old', () => {
        expect(PRODUCT_TYPE).to.have.property('NEW');
        expect(PRODUCT_TYPE).to.have.property('OLD');
    });

});
