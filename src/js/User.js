import {PRODUCT_TYPE, USER_TYPE} from "./config/settings";
import moment from 'moment';


/**
 * This is a Product object which contains three properties
 * @param number productType - new 1 , old - 2
 * @param number price - the price of the product
 * @param date publishedDate - the publish date of the product
 * @constructor
 */
export default class User {
    constructor(userType) {
        this.userType = userType;
    }

    isCompanyUser() {
        return this.userType === USER_TYPE.COMPANY_USER;
    }

}