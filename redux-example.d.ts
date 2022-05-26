import { LitElement } from 'lit';
export declare class Counter extends LitElement {
    counterSlice: import("@reduxjs/toolkit").Slice<{
        value: number;
    }, {
        incremented: (state: import("immer/dist/internal").WritableDraft<{
            value: number;
        }>) => void;
        decremented: (state: import("immer/dist/internal").WritableDraft<{
            value: number;
        }>) => void;
    }, "counter">;
}
export declare const incremented: any, decremented: any;
//# sourceMappingURL=redux-example.d.ts.map