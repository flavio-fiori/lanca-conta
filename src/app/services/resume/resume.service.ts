import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { IResume } from 'src/app/@types/resume';
@Injectable({
    providedIn: 'root'
})

export class ResumeService {

    constructor(private httpClient: HttpClient) {}

    public search() {

        return this.httpClient.get<IResume>(`${environment.baseURL}/summary`);

    }


};
