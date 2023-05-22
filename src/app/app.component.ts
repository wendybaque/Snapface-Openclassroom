import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';

// map : transforme les émissions d'un observable.
// filter : filtre les émission d'un observable.
// tap : ajoute des effets secondaires/side effects à un observable.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;
  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      // L'ordre des opérateurs est important !
      filter((value) => value % 3 === 0),
      map((value) =>
        value % 2 === 0
          ? `Je suis ${value} et je suis pair`
          : `Je suis ${value} et je suis impair`
      ),
      tap((text) => this.logger(text))
    );
  }

  // effet secondaire ou side effect
  logger(text: string) {
    console.log(`log: ${text}`);
  }
}
