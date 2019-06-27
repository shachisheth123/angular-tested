import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';
import { User } from 'src/app/user/user';



@Component({
    templateUrl: './chapters.component.html',
    styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

    courseForSessionStorage: Courses;

    constructor(private courseService: CourseService,
        private route: ActivatedRoute) { }

    course: Courses;
    chapters: CourseChapter[]
    modules: ChapterModule[];

    courseId: number;
    ngOnInit(): void {

        this.route.paramMap.subscribe((map) => {
            this.courseId = Number(map.get("courseId"));
            console.log(this.courseId)
            this.courseService.getCourseById(this.courseId).subscribe((data) => {
                this.course = data;
           
            this.chapters = this.course.courseChapter;

            for (let i = 0; i < this.chapters.length; i++) {
                this.modules = this.chapters[i].chapterModule;
            }
            
        })
    })

    }
}