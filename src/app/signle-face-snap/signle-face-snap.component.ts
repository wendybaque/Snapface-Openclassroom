import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signle-face-snap',
  templateUrl: './signle-face-snap.component.html',
  styleUrls: ['./signle-face-snap.component.scss'],
})
export class SignleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh, Snap !';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId );
  }

  onSnap() {
    if (this.buttonText === 'Oh, Snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh, Snap !';
    }
  }
}
