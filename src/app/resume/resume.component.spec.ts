import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { ResumeService } from "../services/resume/resume.service";
import { ResumeComponent } from "./resume.component";

describe('Resume Component', () => {

    let fixture: ComponentFixture<ResumeComponent>;
    let component: ResumeComponent;
    let element: HTMLElement;
    let service: ResumeService

    beforeEach( async () => {

        await TestBed.configureTestingModule({
            declarations: [ResumeComponent],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(ResumeComponent);

        component = fixture.componentInstance;

        service = TestBed.inject(ResumeService);

    });

    it('should create component', () => {

        expect(component).toBeTruthy();

    });

    it('should display title', () => {

        element = fixture.debugElement.nativeElement.querySelector('h2');
        expect(element.textContent).toEqual('Resumo');

    });

    it('should show transactions total correctly', () => {

        const resumeInfo = () => {
            return {
                initialDate: "2021-05-26",
                finalDate: "2021-05-26",
                totalQuantity: 1546,
                totalAmount: 313388,
                totalNetAmount: 301847.02,
                totalAverageAmount: 202.71
            }
        };

        spyOn(service, 'search')
            .and.returnValue(of(resumeInfo())); 

        fixture.detectChanges();

        const element = fixture.nativeElement.querySelector('#resume-total').textContent;

        expect(element).toEqual('$313,388.00');

    })

});