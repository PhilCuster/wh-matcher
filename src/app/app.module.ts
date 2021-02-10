import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AboutComponent } from './about/about.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const routes: Route[] = [
  { path: 'search', component: GameFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'games', component: GameListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/search' },
];

@NgModule({
  declarations: [AppComponent, GameFormComponent, AboutComponent, GameListComponent, LoadingSpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
