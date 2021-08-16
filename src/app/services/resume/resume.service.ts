import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {

    private resumeInfo: any;

    constructor(private httpClient: HttpClient) {

        this.resumeInfo = [];

    }

    get resume() {
        return this.resumeInfo;
    }

    serach() {

        return this.httpClient.get<any>('http://localhost:3000/summary');

    }


}
