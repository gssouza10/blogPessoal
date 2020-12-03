import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component'
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'feed', component: FeedComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
