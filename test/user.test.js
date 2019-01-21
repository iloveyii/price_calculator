import { assert, expect } from 'chai';
import { USER_TYPE, PRODUCT_TYPE} from '../src/js/config/settings';
import User from '../src/js/User';

describe('src/User.js', _=> {
    it('Check user type', () => {
        const user = new User(USER_TYPE.COMPANY_USER);
        assert.equal(USER_TYPE.COMPANY_USER, user.isCompanyUser());
    });


});
