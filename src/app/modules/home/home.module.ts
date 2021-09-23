import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeLeftbarComponent } from './components/home-leftbar/home-leftbar.component';
import { HomeRightbarComponent } from './components/home-rightbar/home-rightbar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import {MatDividerModule} from '@angular/material/divider'; 
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { WriteNewsFeedPostComponent } from './components/write-news-feed-post/write-news-feed-post.component';
import { WriteNewsFeedPostDialogComponent } from './components/write-news-feed-post-dialog/write-news-feed-post-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewsFeedPostComponent } from './components/news-feed-post/news-feed-post.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftbarComponent,
    HomeRightbarComponent,
    NewsFeedComponent,
    WriteNewsFeedPostComponent,
    WriteNewsFeedPostDialogComponent,
    NewsFeedPostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule

  ]
})
export class HomeModule { }
