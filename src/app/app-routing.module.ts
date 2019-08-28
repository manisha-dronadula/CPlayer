import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MyrecommendationComponent } from './myrecommendation/myrecommendation.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UnrecommendComponent } from './unrecommend/unrecommend.component';
import { AuthGuard } from './guards/auth';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },

  {   path: '',redirectTo: '/login',pathMatch: 'full'  },
  {   path: 'header',component: HeaderComponent, canActivate: [AuthGuard] },
  {   path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {   path: 'myrecommendation',component: MyrecommendationComponent,canActivate: [AuthGuard]},
  {   path: 'favourite',component:FavoriteComponent,canActivate: [AuthGuard]},
  {   path: 'playerstatistics',component: PlayerstatisticsComponent },  
    {   path: 'login', component: LoginComponent },
  {   path: 'signup', component: SignupComponent },
  {   path: 'recommended', component: RecommendedComponent },
  {   path: 'editprofile', component: EditprofileComponent },
  {   path: 'unrecommend', component: UnrecommendComponent }
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
