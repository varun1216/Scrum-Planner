import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserScrumRoutingModule } from './user-scrum-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { UserScrumComponent } from './user-scrum.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BoardComponent } from './board/board.component';
import { SprintComponent } from './sprint/sprint.component';
import { CreateStoryComponent } from './board/create-story/create-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserScrumComponent,
    NavigationComponent,
    HeaderNavComponent,
    BoardComponent,
    SprintComponent,
    CreateStoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    UserScrumRoutingModule,
    
  ]
})
export class UserScrumModule { }
