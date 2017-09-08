"use strict";
import test from "./second";

/**
 * A variable that is made private via comment.
 */
export const fakePrivateVariable = test;

/**
 * A function that is made private via comment.
 */
export function fakeFunction(str: string): string {
    return str + "2";
}

/**
 * A class that is documented as being private.
 */
export class PrivateClass {
    /**
     * A variable that is made private via comment.
     */
    privateclass_a: string;

    /**
     * privateclass_b description
     */
    privateclass_b: string;

    /**
     * privateclass_c description
     * @returns {string}
     * @memberof PrivateClass
     */
    privateclass_c() {
        return "aaa";
    }

    /**
     * @param {string} param
     * @returns {string} return desc
     * @memberof PrivateClass
     */
    privateclass_d(param: string) {
        return param;
    }
}
