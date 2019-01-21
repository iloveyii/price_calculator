import { USER_TYPE} from "./config/settings";

/**
 * This is a User object which contains one property
 * @param number userType - Company user 1 , normal user - 2
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