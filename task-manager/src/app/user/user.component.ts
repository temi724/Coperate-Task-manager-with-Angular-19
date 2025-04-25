import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../data';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() userId: string = '';
  allUsers = DUMMY_USERS;
  selectedUser = DUMMY_USERS[randomIndex];
  get imagePath() {
    return `assets/${this.selectedUser.avatar}`;
  }
}
