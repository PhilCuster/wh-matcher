import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameOptions } from 'src/model/game-options.model';
import { GameService } from 'src/service/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.less']
})
export class GameFormComponent implements OnInit {

  formOptions: GameOptions;

  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameService: GameService) { }

  get pointsFormArray(): FormArray {
    return this.gameForm.get('points') as FormArray;
  }

  onPointsChange(points: string, isChecked: boolean) {
    const pointsFormArray = <FormArray>this.gameForm.controls.points;
    if (isChecked) {
      pointsFormArray.push(new FormControl(points));
    } else {
      let index = pointsFormArray.controls.findIndex(x => x.value == points);
      pointsFormArray.removeAt(index);
    }
  }

  submitGameRequest() {
    console.log(this.gameForm.value);
  }

  ngOnInit(): void {
    this.gameService.getGameFormOptions().subscribe(options => {
      // Set defaults
      //this.gameForm.get('game').setValue(options.game[0]);
      // Add point values
      //this.pointsFormArray.push(this.formBuilder.group())
      this.gameForm = this.formBuilder.group({
        game: [options.game[0], Validators.required], // Default to first game, should be 40k
        points: this.formBuilder.array([], Validators.required),
        level: ['', Validators.required]
      });
      this.formOptions = options;
    });
  }

}
