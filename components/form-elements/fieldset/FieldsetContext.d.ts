/// <reference types="react" />
import { ActionBase, ReducerBase } from '../../../utils/reducer';
export type FieldsetState = {
    registered: string[];
    errored: string[];
};
export type SetErrorAction = ActionBase<'set_error', {
    id: string;
    error: boolean;
}>;
export type RegisterComponentAction = ActionBase<'register_component', {
    id: string;
    unregister: boolean;
}>;
export type FieldsetReducer = ReducerBase<FieldsetState, SetErrorAction | RegisterComponentAction>;
export declare const reducer: FieldsetReducer;
export type FieldsetContextValue = {
    isFieldset: boolean;
    dispatch: React.Dispatch<SetErrorAction | RegisterComponentAction>;
};
/**
 * Context to pass the `FieldsetContextValue` to the `Fieldset` and `Fieldset.Legend` components.
 */
declare const FieldsetContext: import("react").Context<FieldsetContextValue>;
/**
 * Hook to get the `FieldsetContext`.
 *
 * @returns {FieldsetContextValue} The FieldsetContext
 */
export declare const useFieldsetContext: () => FieldsetContextValue;
export default FieldsetContext;
