import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
import { SearchService } from './services/search.service';
import { MyrecommendationComponent } from './myrecommendation/myrecommendation.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {  MatListModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { playerStatsService } from './services/playerStats.service';
import { UserService } from './services/userService.service';
import { AuthGuard } from './guards/auth';
import { JwtInterceptor } from './guards/jwtInterceptor';
import { ErrorInterceptor } from './guards/errorInterceptor';
import { AuthenticationService } from './services/authentication.service';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UpdateProfileService } from './services/updateprofile.service';
import { RecommendService } from './services/recommend.service';
import { UnrecommendComponent } from './unrecommend/unrecommend.component';
import { UnrecommendService } from './services/unrecommend.service';
import { RouterService } from './services/router.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FavoriteComponent,
    RecommendedComponent,
    LoginComponent,
    SignupComponent, 
    MyrecommendationComponent,
    PlayerstatisticsComponent,
    EditprofileComponent,
    UnrecommendComponent
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,    
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule
    
    

  ],
  providers: [
     AuthGuard,
    AuthenticationService,
    SearchService,
    playerStatsService,
    UserService,
    RecommendService,
    UnrecommendService,
    RouterService,
    UpdateProfileService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
