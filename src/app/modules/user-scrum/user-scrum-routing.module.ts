import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserScrumComponent } from './user-scrum.component';
import { SprintComponent } from './sprint/sprint.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [{
  path: '',
  component: UserScrumComponent,

children: [
  { path: 'board', component: BoardComponent },
  { path: 'sprint', component: SprintComponent },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserScrumRoutingModule { }
