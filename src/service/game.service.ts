import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameOptions, GameOptionsAdapter } from 'src/model/game-options.model';
import { map } from "rxjs/operators";
import { Game, GameAdapter } from 'src/model/game.model';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private gameOptionsAdapter: GameOptionsAdapter, private gameAdapter: GameAdapter) { }

  getGameFormOptions(): Observable<GameOptions> {
    return this.http.get(`/api/games/options`).pipe(
      map((data: any) => this.gameOptionsAdapter.adapt(data))
    );
  }

  // TODO: Add sorting
  getGames(): Observable<Game[]> {
    return this.http.get(`/api/games`).pipe(
      map((data: any[]) => data.map(item => this.gameAdapter.adapt(item)))
    );
  }
}
