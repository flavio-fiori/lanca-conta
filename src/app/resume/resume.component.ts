import { Component, OnInit, Input } from "@angular/core";
import { ResumeService } from "../services/resume/resume.service";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {

    @Input() resume: any = [];

    constructor(private service: ResumeService){}

    ngOnInit(): void {

        this.service.serach().subscribe(response => this.resume = response);

    }

}