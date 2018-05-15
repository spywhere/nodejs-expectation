import * as expectation from "./expectation";
import {
    parseRegExp
} from "./data-pattern";

export let expect = expectation.expect;
export let ExpectationStatus = expectation.ExpectationStatus;
export let pattern = (name: string) => parseRegExp(`<${ name }>`);
