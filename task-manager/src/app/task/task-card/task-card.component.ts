import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../../data';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  tasks = dummyTasks;
  @Input({ required: true }) task!: Task;
  @Output() taskCompleted = new EventEmitter<string>();

  onComplete() {
    this.taskCompleted.emit(this.task.id);
  }
}
