import {PRODUCT_TYPE} from "./config/settings";
import moment from 'moment';


/**
 * This is a Product object which contains three properties
 * @param number productType - new 1 , old - 2
 * @param number price - the price of the product
 * @param date publishedDate - the publish date of the product
 * @constructor
 */
export default class Product {
    constructor(productType, price, publishedDate) {
        this.productType = productType;
        this.price = price;
        this.publishedDate = publishedDate;
        this.publishedToday = this.publishedToday.bind(this);
    }

    publishedToday() {
        const sameDay = moment().isSame(moment(this.publishedDate), 'day');
        console.log('Same day', sameDay, this);
        return sameDay;
    }

    isNew() {
        return Number(this.productType) === PRODUCT_TYPE.NEW;
    }
}