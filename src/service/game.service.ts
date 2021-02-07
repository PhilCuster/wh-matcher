import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameOptions, GameOptionsAdapter } from 'src/model/game-options.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private gameOptionsAdapter: GameOptionsAdapter) { }

  getGameFormOptions(): Observable<GameOptions> {
    return this.http.get(`/api/game-options`).pipe(
      map((data: any) => this.gameOptionsAdapter.adapt(data))
    );
  }
}
