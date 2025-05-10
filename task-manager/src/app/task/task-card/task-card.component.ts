import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  DestroyRef,
  Inject,
  Output,
} from '@angular/core';
import { dummyTasks } from '../../data';
import { Task } from '../../models/task';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent implements OnInit {
  userId: string = '';
  tasks: any;
  constructor(private taskService: TaskService, private ar: ActivatedRoute) {}
  private destroyRef = Inject(DestroyRef);
  ngOnInit() {
    const subscription = this.ar.params.subscribe((params) => {
      this.userId = params['userId'];

      this.tasks = this.taskService.userTasks(this.userId);
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  // @Input({ required: true }) task!: Task;

  // @Output() taskCompleted = new EventEmitter<string>();

  onComplete() {
    this.taskService.removeTask(this.tasks.id);
  }
}
