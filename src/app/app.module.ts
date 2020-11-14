import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


  
const appRoutes: Routes = [
  { path:"article" , component: ArticleViewComponent},
  {path:'article/:id',component:ArticleDetailComponent },// pour afficher ce component on sera quand meme dans la partie acrticle , id sera l'argument
  { path:'auth' , component: AuthComponent},
  {path:'',component: ArticleViewComponent},
 
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    ArticleComponent,
    ArticleViewComponent,
    AuthComponent,
    ArticleDetailComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
