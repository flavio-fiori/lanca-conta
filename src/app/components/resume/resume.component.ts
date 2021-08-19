import { Component, OnInit, Input } from "@angular/core";
import { ResumeService } from "../../services/resume/resume.service";

import { IResume } from "../../@types/resume";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {

    @Input() resume: IResume;

    constructor(private service: ResumeService){

        this.resume = {
            initialDate: String(new Date()),
            finalDate: String(new Date()),
            totalAmount: 0,
            totalAverageAmount: 0,
            totalNetAmount: 0,
            totalQuantity: 0
        };

    }

    ngOnInit(): void {

        this.service.search().subscribe(response => this.resume = response);

    }

};