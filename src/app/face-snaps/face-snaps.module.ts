import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from '../face-snaps/components/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from '../face-snaps/components/face-snap/face-snap.component';
import { SignleFaceSnapComponent } from '../face-snaps/components/signle-face-snap/signle-face-snap.component';
import { NewFaceSnapComponent } from '../face-snaps/components/new-face-snap/new-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsRoutingModule } from './face-snaps.routing.module';

@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SignleFaceSnapComponent,
    NewFaceSnapComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FaceSnapsRoutingModule],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SignleFaceSnapComponent,
    NewFaceSnapComponent,
  ],
})
export class FaceSnapsModule {}
