import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { ITransaction } from './../../@types/transaction';
@Injectable({
    providedIn: 'root'
})

export class TransactionService {

    constructor(private httpClient: HttpClient) {}

    public searchAll() {

        return this.httpClient.get<ITransaction[]>(`${environment.baseURL}/transactions`);

    }
};