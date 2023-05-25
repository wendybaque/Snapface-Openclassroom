import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SignleFaceSnapComponent } from './components/signle-face-snap/signle-face-snap.component';
// L'ordre des routes a une importance !
const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: SignleFaceSnapComponent },
  { path: '', component: FaceSnapListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}