import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    let user: User = {
      firstName: "Ophir",
      lastName: "Katz",
      email: "ophir@email.com"
    };

    for (let i: number = 0; i < 100; i++) {
      console.log('Adding user...');
      this.users.push(user);
    }

    const notification = {
      title: 'ConverseCode Alert',
      body: 'A notification from CoverseCode!'
    };

    let n = new Notification(notification.title, notification);
  }

}
