import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent {

  courseCategories = [
    {id:1,name:'Development'},
    {id:2,name:'Art'},
    {id:3,name:'Languages'}
  ];

  submit(f){
    console.log(f);
  }
}
