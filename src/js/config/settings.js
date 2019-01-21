export const USER_TYPE = {
    COMPANY_USER : 1,
    NORMAL_USER: 2
};

export const PRODUCT_TYPE = {
    NEW : 1,
    OLD: 2
};

export const PRODUCT_TYPE_PRICES = {
    [PRODUCT_TYPE.NEW] : 25,
    [PRODUCT_TYPE.OLD]: 35
};

export const REBATE = {
    PRODUCT_IS_NEW_AND_PUBLISHED_TODAY : 10,
    COMPANY_USER : 5,
    DEFAULT : 0
};