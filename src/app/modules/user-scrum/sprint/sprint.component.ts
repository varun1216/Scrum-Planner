import { Component } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrl: './sprint.component.scss'
})
export class SprintComponent {
  sprintPoints: number = 0;

  constructor(private storyService: StoryService) { }

  autoSelectStories(): void {
    const stories = this.storyService.getStories();
    let selectedPoints = 0;
    let selectedStories: { storyTitle: string, storyPoints: number,status:string }[] = [];

    stories.forEach((story:any) => {
      if (selectedPoints + story.storyPoints <= this.sprintPoints) {
        selectedPoints += story.storyPoints;
        selectedStories.push(story);
      }
    });

    // Clear existing selected stories before adding new ones
    this.storyService.clearSelectedStories();

    // Add the selected stories to the service
    selectedStories.forEach((story:any) => {
      this.storyService.selectStory(story);
    });
  }

  clearStories(): void {
    this.storyService.clearStories();
  }

  clearSelectedStories(): void {
    this.storyService.clearSelectedStories();
  }
  getSelectedStories() {

    return this.storyService.getSelectedStories();
  }
}
