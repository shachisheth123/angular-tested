import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { User} from '../user/user';
import { Courses } from './course';

@Injectable()
export class CourseService{

    baseUrl = "http://localhost:8084/"
    constructor(private http: HttpClient) {}

    
    findAllCourses(): Observable<Courses[]> {
        return this.http.get<Courses[]>(this.baseUrl + "course");
    }

    getCourseById(courseId:number):Observable<Courses>{
        return this.http.get<Courses>(this.baseUrl + "course/" + courseId);
    }

    updateUserCourse(user:User):Observable<User>{
        return this.http.put<User>("http://localhost:8083/user",user);
    }

}