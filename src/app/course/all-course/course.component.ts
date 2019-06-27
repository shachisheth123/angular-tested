
import { CourseService } from '../course.service';
import { User } from 'src/app/user/user';
import { Courses } from '../course';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: Array<Courses> = [];
    course: Courses;
    user: User;
    courseId: number;
    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        // this.courses = this.user.course;

        for (let i = 0; i < this.user.course.length; i++) {
            this.courseId = this.user.course[i].courseId;
            console.log(this.courseId)
            this.courseService.getCourseById(this.courseId).subscribe((data) => {
                this.course = data;
                this.courses.push(this.course);
            })
        }

    }
}
