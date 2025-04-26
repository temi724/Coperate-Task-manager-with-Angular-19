import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  imports: [FormsModule],
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  enteredTitle: string = '';
  enteredDescription: string = '';
  enteredDueDate: string = '';

  constructor(private taskService: TaskService) {}

  onClose() {
    this.close.emit();
  }
  onTaskSubmitted() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredDescription,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
