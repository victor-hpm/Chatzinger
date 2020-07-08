import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   // este es un arreglo se hace con una propiedad propia de la clase, es una propiedad de tipo User y va a ser un arreglo[]
  // y hasta abajo dentro del constructor, despues de las declaraciones de las 5 variables referenciaremos ese friends
  friends: User[];

  // esta es la base de datos de los amigos
  constructor() {
    let usuario1: User = {
      nick: 'Eduardo',
      subnick: 'Lalo',
      age: 28,
      email: 'eduardo@platzi.com',
      friend: true,
      uid: 1,
      // agragamos un status diferencte en casa usuario, para despues ir a home.component.html y agregar la imagen con un {{}}. png para que cambie segun su estado
      status:"online"
    };

    let usuario2: User ={
      nick: 'Yuliana',
      subnick: 'Yuli',
      age: 25,
      email: 'yuliana@platzi.com',
      friend: true,
      uid: 2,
      // agragamos un status diferencte en casa usuario, para despues ir a home.component.html y agregar la imagen con un {{}}. png para que cambie segun su estado
      status: "offline"
    };

    let usuario3: User ={
      nick: 'Freddy',
      subnick: 'Fred',
      age: 28,
      email: 'freddy@platzi.com',
      friend: true,
      uid: 3,
      // agragamos un status diferencte en casa usuario, para despues ir a home.component.html y agregar la imagen con un {{}}. png para que cambie segun su estado
      status: "busy"
    };

    let usuario4: User ={
      nick: 'Ricardo',
      subnick: 'Richard',
      age: 17,
      email: 'Ricardo@platzi.com',
      friend: false,
      uid: 4,
      // agragamos un status diferencte en casa usuario, para despues ir a home.component.html y agregar la imagen con un {{}}. png para que cambie segun su estado
      status: "away"
    };

    let usuario5: User ={
      nick: 'Marcos',
      subnick: 'Marck',
      age: 30,
      email: 'Marcos@platzi.com',
      friend: false,
      uid: 5,
      // agragamos un status diferencte en casa usuario, para despues ir a home.component.html y agregar la imagen con un {{}}. png para que cambie segun su estado
      status: "online"
    };
    // referenciando el friends con la palabra this me refiero a la clase conmpleta friends
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  }
  // metodo para regresar friends
  getFriends(){
    return this.friends;
  }
}
