import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../data';

import { type User } from '../models/user';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) userId!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) user!: User;
  // @Output() userSelected = new EventEmitter<string>();
  // @Input({ required: true }) selected!: boolean;
  // name = input.required<string>();

  Users = DUMMY_USERS;
  selectedUserId?: string;

  // selectedUser = 'u1';

  // get imagePath() {
  //   return `${this.selectedUser.avatar}`;
  // }

  onSelect(userId: string) {
    this.selectedUserId = userId;
    // this.userSelected.emit(this.user.id);
  }

  get selectedUser() {
    return this.Users.find((user) => user.id === this.selectedUserId);
  }
}
