import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.html',
  styleUrls: ['./messages.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) { }

}