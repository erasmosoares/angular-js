import { AuthorsService } from './../authors.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AuthorsComponent implements OnInit {
  
  pageTitle;
  authorsList;
  isActive = true;
  isClicked: boolean = false;

  email = "me@example.com";
  imageUrl = "https://cdn-images-1.medium.com/max/1600/1*VnJ1MGwCkkQ5umi895C6Fg.gif";
  course = {
    title: "Pipes",
    rating: 4.9745,
    students:3012,
    price:190.95,
    releaseDate: new Date(2016,3,1)
  }
  
  canSave = true;

  courses = [1,2];
  viewMode = 'map';

  advancedCourses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
  ]

  advancedCourses2;

  task={
    title: 'Review application',
    assignee:{
      name:'John Smith'
    }
  }

  testCustomPipeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices quam mi, ac vehicula metus pellentesque ut. Suspendisse tincidunt ultrices lacus, sit amet bibendum ex rhoncus non. Proin eu pretium libero. Suspendisse varius urna eu nisi dignissim, ut fringilla sapien convallis. Maecenas nec ornare odio. Nullam vestibulum vehicula tortor, sit amet venenatis augue pellentesque ac. Integer leo neque, faucibus vel porta a, sollicitudin eu mauris."
  task3Input = "write here";

  constructor(service: AuthorsService) {
    this.authorsList = service.getAuthors();
    this.pageTitle = service.getNumberOfAuthors() + "Authors";
   }

  ngOnInit() {
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked",$event);
  }

  onKeyUp(){
    console.log(this.email);
  }

  onClick(){
    this.isClicked = !this.isClicked;
  }

  onAdd(){
    this.advancedCourses.push({ id: 4, name: 'course4'});
  }

  onRemove(course){
    let index = this.advancedCourses.indexOf(course);
    this.advancedCourses.splice(index, 1);
  }

  LoadCourses(){
    this.advancedCourses2 = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'},
    ]
  }

  trackCourse(index, course){
      return course ? course.id : undefined;
  }
}