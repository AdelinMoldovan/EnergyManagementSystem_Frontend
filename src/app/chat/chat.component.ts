// Import necessary modules and components
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client, IStompSocket, Message } from '@stomp/stompjs';
import { ChatMessageDto } from '../models/chatMessageDto';
import { WebSocketService } from '../web-socket.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements  OnInit, OnDestroy {
  userToken: string | null | undefined;
  userName: string | null | undefined;

  constructor(public webSocketService: WebSocketService, public authService: AuthService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
   this.userName = this.authService.getUserNameFromToken();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  }
}