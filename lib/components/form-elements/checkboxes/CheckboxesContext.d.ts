/// <reference types="react" />
import { ActionBase } from '../../../utils/reducer';
export type CheckboxesState = {
    conditional: string[];
};
export type SetConditionalAction = ActionBase<'set_conditional', {
    refId: string;
    hasConditional: boolean;
}>;
export type CheckboxesReducer = (state: CheckboxesState, action: SetConditionalAction) => CheckboxesState;
export declare const reducer: CheckboxesReducer;
export type CheckboxesContextValue = {
    name: string;
    dispatch: React.Dispatch<SetConditionalAction>;
    getCheckboxId: (reference: string) => string;
    leaseReference: () => string;
    releaseReference: (reference: string) => void;
};
declare const CheckboxesContext: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').Context<CheckboxesContextValue>;
export declare const useCheckboxesContext: () => CheckboxesContextValue;
export default CheckboxesContext;
