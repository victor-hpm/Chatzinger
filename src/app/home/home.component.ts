import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: User[];
  // declaramos query
  query: string = '';

  // inyectamos un servicio
  constructor(private userServece: UserService) {
    // let myUser: User = {
    //   nick: 'Victor',
    //   subnick: 'Vick',
    //   age: 28,
    //   email: 'VP@info.com',
    //   friend: true,
    //   uid: 1
    // };
    // console.log(myUser);
    // medoto que se creo en userServece.ts para obtener los amigos y ponerseos a la UserService para que ya pueda iterar
    this.friends = userServece.getFriends();
  }

  ngOnInit(): void {
  }

}
