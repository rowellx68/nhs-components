/// <reference types="react" />
import { ActionBase } from '../../../utils/reducer';
export type RadiosState = {
    selected: string;
    conditional: string[];
};
export type SetConditionalAction = ActionBase<'set_conditional', {
    refId: string;
    hasConditional: boolean;
}>;
export type SetSelectedAction = ActionBase<'set_selected', {
    refId: string;
}>;
export type RadiosReducer = (state: RadiosState, action: SetConditionalAction | SetSelectedAction) => RadiosState;
export declare const reducer: RadiosReducer;
export type RadiosContextValue = {
    name: string;
    selectedRadio: string;
    dispatch: React.Dispatch<SetConditionalAction | SetSelectedAction>;
    getRadioId: (reference: string) => string;
    leaseReference: () => string;
    releaseReference: (reference: string) => void;
};
declare const RadiosContext: import("react").Context<RadiosContextValue>;
export declare const useRadiosContext: () => RadiosContextValue;
export default RadiosContext;
