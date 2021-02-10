import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { User, UserAdapter } from './user.model';

export class Game {
  constructor(
    public game: string,
    public points: string[],
    public level: string,
    public creator: User,
    public created: Date
  ) {}

  get displayPoints(): string {
    return this.points.join(', ');
  }
}

@Injectable({
  providedIn: 'root',
})
export class GameAdapter implements Adapter<Game> {
  constructor(private userAdapter: UserAdapter) {}
  adapt(item: any): Game {
    return new Game(
      item.game,
      item.points,
      item.level,
      this.userAdapter.adapt(item.creator),
      new Date(item.created)
    );
  }
}
