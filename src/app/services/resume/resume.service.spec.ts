import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { ResumeService } from "./resume.service";

import { environment } from './../../../environments/environment';

describe('Resume Service', () => {

    let httpTestingController: HttpTestingController;
    let service: ResumeService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [ResumeService],
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(ResumeService);

    });

    afterEach(() => httpTestingController.verify());

    it('should be created', () => {

        expect(service).toBeTruthy();

    });

    it('should returned Observable should match the right data', () => {

        const mockResume = {            
            "totalQuantity": 1546,
            "totalAmount": 313388,
            "totalNetAmount": 301847.02,
            "totalAverageAmount": 202.71,
            "initialDate": "2021-05-26",
            "finalDate": "2021-05-26"
        };

        service.search()
            .subscribe(response => {

                expect(response.totalQuantity).toEqual(1546);

            })

        const req = httpTestingController.expectOne(
            `${environment.baseURL}/summary`
        );

        req.flush(mockResume);

    })

})