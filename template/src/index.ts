"use strict";
import test from "./second";

/**
 * A variable that is made private via comment.
 */
export let fakePrivateVariable = test;

/**
 * A variable that is made protected via comment.
 */
export let fakeProtectedVariable = "test";

/**
 * A function that is made private via comment.
 */
function _fakePrivateFunction() { }

/**
 * A function that is made private via comment.
 */
export function fakePrivateFunction() { }

/**
 * A function that is made protected via comment.
 */
export function fakeProtectedFunction() { }

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
