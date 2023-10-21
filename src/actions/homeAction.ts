import { Dispatch } from "redux";
import { ActionTypes } from '../actionTypes/index';
import { Task } from "../types/home";

export interface AddToDoListInitialTasks {
  type: ActionTypes.TO_DO_LIST_INITIAL_TASKS,
  tasks: Task[]
}

export interface AddToDoListTask {
  type: ActionTypes.TO_DO_LIST_ADD_TASK,
  text: string,
  id: number
}

export interface RemoveToDoListTask {
  type: ActionTypes.TO_DO_LIST_REMOVE_TASK,
  id: number
}

export interface UpdateToDoListTask {
  type: ActionTypes.TO_DO_LIST_UPDATE_STATUS_TASK,
  id: number,
}

export const addToDoListInitialTasks = (tasks: Task[]) => (dispatch: Dispatch<AddToDoListInitialTasks>) => {
  dispatch({
    type: ActionTypes.TO_DO_LIST_INITIAL_TASKS,
    tasks,
  });
}

export const addToDoListTask = (text: string, nextTaskId: number) => (dispatch: Dispatch<AddToDoListTask>) => {
  dispatch({
    type: ActionTypes.TO_DO_LIST_ADD_TASK,
    text,
    id: nextTaskId
  });
}

export const removeToDoListTask = (id: number) => (dispatch: Dispatch<RemoveToDoListTask>) => {
  dispatch({
    type: ActionTypes.TO_DO_LIST_REMOVE_TASK,
    id
  });
}

export const updateToDoListTask = (id: number) => (dispatch: Dispatch<UpdateToDoListTask>) => {
  dispatch({
    type: ActionTypes.TO_DO_LIST_UPDATE_STATUS_TASK,
    id
  });
}

