import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

// import { Location } from '@angular/common';

// esto le informa que es un componente el cual tiene varios atrributos
@Component({
// el app-root es lo que le permite a angular hacer SPA y ya sabe angular donde meter la logica y
// la vista que le conresponde al app compounent
  selector: 'app-root',
  // indica que atributo html puede utilizar nuestro compuonente solo puede utilizar uno
  templateUrl: './app.component.html',
  // atributo de css puede ser ninguno o mas de uno
  styleUrls: ['./app.component.scss']
})

// el export permite importar esta clase en otros archivos
export class AppComponent {
  title = 'CHATzinger';
  // items: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.items = firestore.collection('items').valueChanges();
  // }

  // creamos constructor para poder inyectar el router, publico para acceder a el desde html
  constructor(public router: Router) {
    // constructor(public location: Location)

  }

}

