import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: 'Jean-Louis Aubert',
          description: 'Mon chanteur préféré',
          imageUrl:
            'https://www.jeanlouisaubert.com/var/warner/storage/images/1/5/5/8/2198551-1-fre-FR/rub-photo-1.jpg',
          createdDate: new Date(),
          snaps: 241,
          location: 'Paris',
        },
        {
          title: 'Olivier Adam',
          description: 'Mon auteur préférée',
          imageUrl:
            'https://www.lexpress.fr/resizer/TaL0kaf_CvFId7d-Rdstav_IsXo=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/7BF7R5IA2FG65GHZVOMMXW7H74.jpg',
          createdDate: new Date(),
          snaps: 143,
        },
        {
          title: 'Vincent Macaigne',
          description: 'Mon acteur préféré',
          imageUrl: 'https://www.babelio.com/users/AVT_Vincent-Macaigne_8369.jpg',
          createdDate: new Date(),
          snaps: 100,
          location: 'Tonnerre',
        },
      ];
}