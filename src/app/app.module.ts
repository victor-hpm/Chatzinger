import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './pipes/search';
import { FormsModule } from '@angular/forms';

// implemnetando la parte de roteo implementaremos nuestras rutas
const appRoutes: Routes = [
  // si alguien ya esta logueado y entra a la url de la pagina no encontrara nada porque no hy ningun path que le haga match
  // path anonimo para que me mande al componente que yo quiero porque no hay ningun path que le haga match
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'conversation/:uid', component: ConversationComponent},
  {path: 'profile', component: ProfileComponent}
  // estas son mis rutar y tenemos que importar el angular rauter y nos vamos a imports
];
@NgModule({
  declarations: [
    // todo lo tenemos que importar
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    // todo lo tenemos que importar
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
