import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  format = 'list';

  myCourse = {
    id: 0,
    title: '',
    description: '',
    vote: {
      like: 0,
      disLike: 0
    },
    active: false,
    image: ''
  };

  editable = false;

  image = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta";

  courses = [
    {image: 'http://lorempixel.com/400/200/technics/1', active: true, id: 1, title: 'Angular', description: 'courses is complet 1!', vote: {like: 11, disLike: 2}},
    {image: 'http://lorempixel.com/400/200/technics/2', active: true, id: 2, title: 'SvelteJS', description: 'courses is complet 2!', vote: {like: 20, disLike: 4}},
    {image: 'http://lorempixel.com/400/200/technics/3', active: true, id: 3, title: 'VueJS', description: 'courses is complet 3!', vote: {like: 10, disLike: 0}},
    {image: 'http://lorempixel.com/400/200/technics/4', active: true, id: 4, title: 'ReactJS', description: 'courses is complet 4!', vote: {like: 19, disLike: 1}}
  ];

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses.unshift(this.myCourse);
    this.initCourse();
  }


  initCourse() {
    this.myCourse = {
      id: 0,
      title: '',
      description: '',
      vote: {
        like: 0,
        disLike: 0
      },
      active: false,
      image: ''
    }
  }

  deleteCourse(course) {
    
    if(confirm('Are you sure to delete this course ?')) {
       let index = this.courses.indexOf(course);
       this.courses.splice(index, 1);
    }
   
  }

  editCourse(course) {
    this.myCourse = course;
    this.editable = true;
  }

  updateCourse() {
    this.initCourse();
    this.editable = false;
  }

  incLike(course) {
    course.vote.like++;
  }

  incDisLike(course) {
    course.vote.disLike++;
  }

  changeCourse(data, course) {
      
    if(data.type == 'like') {
      course.vote.like = data.value
    }
    else {
      course.vote.disLike = data.value
    }
  }

  powerCourse(course) {
    course.active = !course.active
  }

}
