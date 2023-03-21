import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Jean-Louis Aubert',
      description: 'Mon chanteur préféré',
      imageUrl:
        'https://www.jeanlouisaubert.com/var/warner/storage/images/1/5/5/8/2198551-1-fre-FR/rub-photo-1.jpg',
      createdDate: new Date(),
      snaps: 241,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Olivier Adam',
      description: 'Mon auteur préférée',
      imageUrl:
        'https://www.lexpress.fr/resizer/TaL0kaf_CvFId7d-Rdstav_IsXo=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/7BF7R5IA2FG65GHZVOMMXW7H74.jpg',
      createdDate: new Date(),
      snaps: 143,
    },
    {
      id: 3,
      title: 'Vincent Macaigne',
      description: 'Mon acteur préféré',
      imageUrl: 'https://www.babelio.com/users/AVT_Vincent-Macaigne_8369.jpg',
      createdDate: new Date(),
      snaps: 100,
      location: 'Tonnerre',
    },
  ];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
