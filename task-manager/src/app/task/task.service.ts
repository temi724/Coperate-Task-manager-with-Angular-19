import { Injectable } from '@angular/core';
import { NewTask, Task } from '../models/task';
import { dummyTasks } from '../data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    let storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  //get user task by ID
  userTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  //Add new task
  addTask(task: NewTask, userId: string) {
    this.tasks.push({
      ...task,
      id: Math.random().toString(),
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    // this.tasks = this.tasks.filter((task) => task.id !== taskId);
    let index = this.tasks.findIndex((res) => res.id === taskId);
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
