import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../../../../services/story.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrl: './create-story.component.scss'
})
export class CreateStoryComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() responseStatus: EventEmitter<any> = new EventEmitter<any>();
  storyFormGroup = this.formBuilder.group({
    stroyTitle:['',Validators.required],
    storyPoints:['',Validators.required],
    status:['To Do']
   })
  
   constructor(private formBuilder: UntypedFormBuilder,private storyService: StoryService){

   }
  toggleModalClose() {
    this.closeModal.emit();
  }
  saveStory(){
   if(this.storyFormGroup.valid){
    console.log(this.storyFormGroup.value);
   let outputStatus= this.storyService.addStory(this.storyFormGroup.value);
    this.responseStatus.emit(outputStatus);
    this.toggleModalClose();
   }
 
  }
}
