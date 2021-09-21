import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeLeftbarComponent } from './components/home-leftbar/home-leftbar.component';
import { HomeRightbarComponent } from './components/home-rightbar/home-rightbar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftbarComponent,
    HomeRightbarComponent,
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
