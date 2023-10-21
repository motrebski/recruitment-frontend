import React, { useEffect } from 'react';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import { toDoListData } from '../../data';
import { Dispatch } from "redux";
import { useDispatch } from 'react-redux';
import { addToDoListInitialTasks } from '../../actions/homeAction';
import styles from './Home.module.scss';

export const Home = () => {

  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(addToDoListInitialTasks(toDoListData));
    // eslint-disable-next-line
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.header}>To do list application</div>
      <ToDoList></ToDoList>
    </div>
  );
}
