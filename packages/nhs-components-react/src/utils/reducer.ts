export type ReducerBase<TState, TAction = ActionBase> = (
  state: TState,
  action: TAction,
) => TState

export type ActionBase<TType = unknown, TData = unknown> = {
  type: TType
  data: TData
}
