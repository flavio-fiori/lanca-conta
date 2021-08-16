import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    private listTransactions: any[];

    constructor(private httpClient: HttpClient) {

        this.listTransactions = [];

    }

    get transactions() {
        return this.listTransactions;
    }

    getAll() {

        return this.httpClient.get<any[]>('http://localhost:3000/transactions');

    }
}
