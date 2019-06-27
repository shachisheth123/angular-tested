import { CourseComponent } from "./course.component";
import { UserService } from 'src/app/user/user.service';
import { CourseService } from '../course.service';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('course component', () => {
    let comp: CourseComponent;
    let fixure: ComponentFixture<CourseComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let courseService:CourseService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers: [
                FormBuilder,
                UserService,
                CourseService
            ]
        }).compileComponents().then(() => {
            fixure = TestBed.createComponent(CourseComponent);
            comp = fixure.componentInstance;
            comp.ngOnInit();
            // de = fixure.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));


    it('should test ngOnInit', () => {
     
        expect(comp.ngOnInit()).toBeDefined();

      });

});
