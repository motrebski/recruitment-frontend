import { ActionTypes } from '../actionTypes/index';
import {
  AddToDoListInitialTasks,
  AddToDoListTask,
  RemoveToDoListTask,
  UpdateToDoListTask
} from "../actions/homeAction";
import { Task } from "../types/home"

type Action =
  | AddToDoListInitialTasks
  | AddToDoListTask
  | RemoveToDoListTask
  | UpdateToDoListTask;

const initialState = {
  toDoListTasks: []
};

export const homeReducer = (state: Record<string, any> = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TO_DO_LIST_INITIAL_TASKS:
      return {
        ...state,
        toDoListTasks: action.tasks
      };

    case ActionTypes.TO_DO_LIST_ADD_TASK:
      return {
        ...state,
        toDoListTasks: [
          ...state.toDoListTasks,
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ]
      };

    case ActionTypes.TO_DO_LIST_REMOVE_TASK:
      return {
        ...state,
        toDoListTasks: state.toDoListTasks.filter((task: Task) =>
        (task.id !== action.id))
      }

    case ActionTypes.TO_DO_LIST_UPDATE_STATUS_TASK:
      return {
        ...state,
        toDoListTasks: state.toDoListTasks.map((task: Task) =>
        (task.id === action.id)
          ? { ...task, done: !task.done }
          : task)
      }

    default:
      return state;
  }
};
