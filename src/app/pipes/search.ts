import {Pipe, PipeTransform} from '@angular/core';

// decorador de Pipe
@Pipe ({
  // nombre de nuestro pipe, este es muy importante ya que es el nombre que se utiliza al momento de querer implementar ese pipe en el html
  name: 'search'
})

// ahora vamos a hacer lo que hacemos con cuiaquier clase lo vamos a exportar
export class SearchPipe implements PipeTransform {
  // es el metodo que pide implementar el PipeTransform
  // recibimos dos cosas un value y unos argumentos el value es el arreglo de usuarios o amigos y args es un qery string por ejemplo si tu tienes varios amigos que se llaman ricardo ps pasas ricardo y te va a regresar sus amigos
  // entonces args seria ricardo y value seria la lista de amigos
  public transform(value, args: string) {
    // primero checamos si value no trae nada
    if (!value) {
      // regresamos nada es decir que vine vacio el arreglo
      return;
    }
    // despues checamos que no traemos argumentos
    if (!args) {
    // si no trae args me tiene que regresar tal cual me llego value es decir el arreglo
    // en caso de que venga vacio regresa el arreglo es decir todos lo amigos
      return value;
    }
    // pasamos los argumentos o el query string a minusculas
    args = args.toLowerCase();
    // retorna cada contacto en el caso de encontrar
    return value.filter((item) => {
      // esto lo que hara si le pasasmos un objeto lo convertira en texto y checa si incluye la palabra que le pusisnos la cual es el args
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
