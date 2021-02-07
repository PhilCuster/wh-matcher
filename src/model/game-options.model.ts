import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class GameOptions {
  constructor(
    public game: string[],
    public points: string[],
    public level: string[]
  ) {}
}

@Injectable({
    providedIn: "root",
})
export class GameOptionsAdapter implements Adapter<GameOptions> {
  adapt(item: any): GameOptions {
    return new GameOptions(item.game, item.points, item.level);
  }
}
