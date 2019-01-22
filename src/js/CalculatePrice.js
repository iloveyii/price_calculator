import {PRODUCT_TYPE_PRICES, REBATE, USER_TYPE} from "./config/settings";

/**
 * This is a Product object which contains two properties
 * @param Object product - Product object
 * @param Object user - User object
 * @constructor
 */
export default class CalculatePrice {
    constructor(product, user) {
        this.product = product;
        this.user = user;
    }

    price() {
        console.log('Inside calculatePrice');
        console.log( ( this.product.price) , Number(PRODUCT_TYPE_PRICES[this.product.productType]) , this.rebate() );
        return Number(this.product.price) + Number(PRODUCT_TYPE_PRICES[this.product.productType]) - this.rebate();
    }

    rebate() {
        // If the product is new and published today - rebate of 10 sek
        if (this.product.publishedToday() && this.product.isNew()) {
            return REBATE.PRODUCT_IS_NEW_AND_PUBLISHED_TODAY;
        }

        // If you user is a company user - rebate 5
        if (Number(this.user.userType) === USER_TYPE.COMPANY_USER) {
            return REBATE.COMPANY_USER;
        }

        return REBATE.DEFAULT;
    }
}