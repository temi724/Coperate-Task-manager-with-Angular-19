import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../models/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  imports: [FormsModule],
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTask>();
  enteredTitle: string = '';
  enteredDescription: string = '';
  enteredDueDate: string = '';

  onClose() {
    this.close.emit();
  }
  onTaskSubmitted() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredDescription,
      dueDate: this.enteredDueDate,
    });
  }
}
