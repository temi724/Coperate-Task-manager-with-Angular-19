import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../data';
import { NewTask, Task } from '../models/task';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasks: Task[] = dummyTasks;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  addtaskClicked: boolean = false;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onTaskCompleted(taskId: string) {
    // console.log('Task completed:', taskId);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTaskClicked() {
    this.addtaskClicked = !this.addtaskClicked;
  }
  closeAddTask() {
    this.addtaskClicked = false;
  }
  onTaskAdded(task: NewTask) {
    this.tasks.push({
      ...task,
      id: Math.random().toString(),
      userId: this.userId,
    });
    this.addtaskClicked = false;
  }
}
