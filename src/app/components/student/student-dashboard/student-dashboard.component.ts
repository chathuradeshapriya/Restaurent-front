import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../../../services/authentication.service';
//import { CourseDetailsService } from '../../../services/course-details.service';
//import { CourseService } from '../../../services/enrollment.service';
import { Router} from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  user = JSON.parse(localStorage.getItem("user")); 

  courses : any;

  constructor(
    private courseService: CourseService,
    private router: Router,
  ) { 
    this.getCourse();
  }

  ngOnInit() {
    
  }
  getCourse(){
//     this.courseService.getStudentCoursesByusername(this.user.username).then(
//       (res)=>{
//     //this.courses = res;
//     console.log(this.courses);
// });  
}

onSelect(item){
  this.router.navigate(['/student_dashboard',item.course]);

}

   
}
