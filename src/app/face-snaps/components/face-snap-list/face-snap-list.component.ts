import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../../../core/models/facesnap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { interval, take, tap, Subject, takeUntil, Observable } from 'rxjs';
// Subject : observable qu'on peut faire émettre quand on veut.

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    interval(1000)
      .pipe(
        // Quand on veut prendres des valeurs d'émissions jusqu'à un nombre donné :
        takeUntil(this.destroy$),
        // Quand on sait en amont combien on veut d'émissions précisément :
        // take(5),
        tap(console.log)
      )
      .subscribe();
  }

  // Pour détruire le composant :
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
