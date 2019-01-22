import CalculatePrice from './CalculatePrice';
import Product from "./Product";
import {PRODUCT_TYPE, REBATE, USER_TYPE} from "./config/settings";
import User from "./User";

window.global  = {
    PRODUCT_TYPE, REBATE, USER_TYPE,
    Product: Product,
    User: User,
    CalculatePrice: CalculatePrice
};

