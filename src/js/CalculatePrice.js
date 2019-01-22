import {PRODUCT_TYPE_PRICES, REBATE, USER_TYPE} from "./config/settings";
import moment from 'moment';


/**
 * This is a Product object which contains three properties
 * @param number productType - new 1 , old - 2
 * @param number price - the price of the product
 * @param date publishedDate - the publish date of the product
 * @constructor
 */
export default class CalculatePrice {
    constructor(product, user) {
        this.product = product;
        this.user = user;
    }

    price() {
        return this.product.price + PRODUCT_TYPE_PRICES[this.product.productType] - this.rebate();
    }

    rebate() {
        // If the product is new and published today - rebate of 10 sek
        if(this.product.publishedToday() && this.product.isNew()) {
            return REBATE.PRODUCT_IS_NEW_AND_PUBLISHED_TODAY;
        }

        // If you user is a company user - rebate 5
        if(this.user.userType === USER_TYPE.COMPANY_USER) {
            return REBATE.COMPANY_USER;
        }

        return REBATE.DEFAULT;
    }
}