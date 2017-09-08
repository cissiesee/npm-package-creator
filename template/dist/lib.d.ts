declare module "lk-lib" {
    export const fakePrivateVariable: string;
    export function fakeFunction(str: string): string;
    export class PrivateClass {
        privateclass_a: string;
        privateclass_b: string;
        privateclass_c(): string;
        privateclass_d(param: string): string;
    }
}