import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  // declaramos variables globales para la clase de tipo any que no tiene ningun valor de inicio
  friendId: any;
  friends: User[];
  friend: User;
  // imprimir un numero en el html
  price: number = 78.234566;
  // para imprimir la fecha de hoy
  today: any = Date.now();
  // para activar de nuevo el de conversation
  constructor(private activatedRoute: ActivatedRoute,
    // inyectamos el servicio
              private userService: UserService ) {
    this.friendId = this.activatedRoute.snapshot.params.uid;
    console.log(this.friendId);

    // y despues tomamos directamente desde nuestro servicio
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    });
    // imprimeindo el objeto completo en la consola del amigo en la conversacion
    console.log(this.friend);
  }

  ngOnInit(): void {
  }

}
