import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../data';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() userSelected = new EventEmitter<string>();
  // name = input.required<string>();

  // allUsers = DUMMY_USERS;
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `${this.selectedUser.avatar}`;
  }

  onSelect() {
    this.userSelected.emit(this.userId);
  }
}
