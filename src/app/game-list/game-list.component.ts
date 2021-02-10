import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/model/game.model';
import { GameService } from 'src/service/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.less']
})
export class GameListComponent implements OnInit {

  games: MatTableDataSource<Game>;
  loading = true;

  displayedColumns = ['creator', 'game', 'level', 'points', 'accept'];

  constructor(private gameService: GameService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      console.log(games);
      this.games = new MatTableDataSource<Game>(games);
      this.loading = false;
    });
  }

}
