import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string;

  ngOnInit() {
    this.title = 'Jean-Louis Aubert';
    this.description = 'Mon chanteur préféré';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl ='https://www.jeanlouisaubert.com/var/warner/storage/images/1/5/5/8/2198551-1-fre-FR/rub-photo-1.jpg';
  }
}
