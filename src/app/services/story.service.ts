import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private stories: { stroyTitle: string, storyPoints: any,status:string }[] = [];
  private selectedStories: { stroyTitle: string, storyPoints: number,status:string }[] = [];
  constructor() { }

  getStories(): { stroyTitle: string, storyPoints: any,status:string }[] {
    return this.stories;
  }

  addStory(story: { stroyTitle: string, storyPoints: any,status:string }): any {
    if (!this.isDuplicate(story)) {
      this.stories.push(story);
      console.log("this.stories", this.stories);
      let resp={
        msg:"Story Created Successfullly!",
        statusCode:1
      }
      return resp;
    }else{
      let resp={
        msg:"Duplicate Story..!",
        statusCode:3
      }
      return resp;
    }
  }
  clearStories(): void {
    this.stories = [];
  }
  selectStory(story: { stroyTitle: string, storyPoints: number,status:string }): void {
    this.selectedStories.push(story);
  }
 
  getSelectedStories() {
    return this.selectedStories;
  }

  clearSelectedStories(): void {
    this.selectedStories = [];
  }
  private isDuplicate(newStory: { stroyTitle: string, storyPoints: any,status:string }): boolean {
    return this.stories.some(story => story.stroyTitle === newStory.stroyTitle);
  }
}
