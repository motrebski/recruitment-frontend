import React, { useState } from 'react';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from 'react-redux';
import { addToDoListTask, removeToDoListTask, updateToDoListTask } from "../../actions/homeAction";
import { RootState } from '../../store';
import { useForm } from "react-hook-form";
import { Task } from "../../types/home";
import { toDoListData } from '../../data';
import { ReactComponent as AddTask } from "../../assets/add-task.svg";
import { ReactComponent as RemoveTask } from "../../assets/remove-task.svg";
import { ReactComponent as UpdateTask } from "../../assets/update-task.svg";
import styles from './ToDoList.module.scss';

export const ToDoList = () => {

  const [nextTaskId, setNextTaskId] = useState<number>(toDoListData.length + 1);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch<Dispatch<any>>();

  const toDoListTasks: Task[] = useSelector<RootState, any>((state) =>
    state.toDoListTasks
  );

  const addTask = (data: Record<string, any> = {}) => {
    dispatch(addToDoListTask(data.taskText, nextTaskId));
    setNextTaskId(id => id + 1);
  }

  const removeTask = (id: number) => {
    dispatch(removeToDoListTask(id));
  }

  const updateTask = (id: number) => {
    dispatch(updateToDoListTask(id));
  }

  return(
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.addTaskFormContainer}>
          <form className={styles.addTaskForm} onSubmit={handleSubmit(addTask)}>
              <input className={styles.addTaskInput}
                placeholder='Add task'
                {...register("taskText", { required: true })} ></input>
              <button aria-label='add task' className={styles.addTaskButton}
                type='submit'>
                  <AddTask/>
              </button>
            
          </form>
        </div>
        {errors.taskText && <span className={styles.addTaskError}>Task is required!</span>}
        {toDoListTasks?.map((task: Task, key: number) =>
          !task.done && (
            (<div key={key} className={styles.toDoListItem}>
              <span className={styles.toDoListText}>{task.text}</span>
              <div className={styles.taskActionContainer}>
                <RemoveTask onClick={() => removeTask(task.id)}/>
                <UpdateTask onClick={() => updateTask(task.id)}/>
              </div>
            </div>)
        ))}
        {toDoListTasks?.map((task: Task, key: number) =>
          task.done && (
            (<div key={key} className={`${styles.toDoListItem} ${styles.toDoListItemDisabled}`}>
              <span className={styles.toDoListText}>{task.text}</span>
              <div className={styles.taskActionContainer}>
                <RemoveTask onClick={() => removeTask(task.id)}/>
                <UpdateTask onClick={() => updateTask(task.id)}/>
              </div>
            </div>)
        ))}
      </div>
    </div>
  );
}
