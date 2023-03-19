import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/facesnap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;

  ngOnInit(): void {
    this.mySnap=new FaceSnap(
      'Jean-Louis Aubert',
      'Mon chanteur préféré',
      'https://www.jeanlouisaubert.com/var/warner/storage/images/1/5/5/8/2198551-1-fre-FR/rub-photo-1.jpg',
      new Date(),
      0
    )
    this.myOtherSnap=new FaceSnap(
      'Olivier Adam',
      'Mon auteur préférée',
      'https://www.lexpress.fr/resizer/TaL0kaf_CvFId7d-Rdstav_IsXo=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/7BF7R5IA2FG65GHZVOMMXW7H74.jpg',
      new Date(),
      0
    )
    this.myLastSnap=new FaceSnap(
      'Vincent Macaigne',
      'Mon acteur préféré',
      'https://www.babelio.com/users/AVT_Vincent-Macaigne_8369.jpg',
      new Date(),
      0
    )
  }
}
