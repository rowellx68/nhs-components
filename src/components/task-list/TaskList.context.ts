import { createContext, useContext } from 'react';

export type TaskListItemContextValue = {
  variant?: 'with-link';
  rowId?: string;
};

const TaskListItemContext = createContext<TaskListItemContextValue>({});

export const useTaskListItemContext = () => useContext(TaskListItemContext);
export const TaskListItemContextProvider = TaskListItemContext.Provider;
