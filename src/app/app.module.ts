import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LogoutComponent} from './components/logout/logout.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WordComponent } from './components/word/word.component';
import { VerbsQuizComponent } from './components/verbs-quiz/verbs-quiz.component';
import { RandomQuizComponent } from './components/random-quiz/random-quiz.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'words', component: WordComponent},
  {path: 'verbs', component: VerbsQuizComponent},
  {path: 'random', component: RandomQuizComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    WordComponent,
    VerbsQuizComponent,
    RandomQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
