import { Injectable } from '@angular/core';
import { NewTask, Task } from '../models/task';
import { dummyTasks } from '../data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = dummyTasks;

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
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  constructor() {}
}
