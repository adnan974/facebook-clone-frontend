import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WriteNewsFeedPostDialogComponent } from '../write-news-feed-post-dialog/write-news-feed-post-dialog.component';

@Component({
  selector: 'app-write-news-feed-post',
  templateUrl: './write-news-feed-post.component.html',
  styleUrls: ['./write-news-feed-post.component.css']
})
export class WriteNewsFeedPostComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(WriteNewsFeedPostDialogComponent,{
      width:'500px',
      height:'428px',
      panelClass: 'custom-dialog-container' 
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

