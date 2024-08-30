import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { API } from "../interfaces/api.interface";



@Injectable({
    providedIn: 'root',
})
export class ApiService{

    constructor( private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon/1';

    getApi():  Observable<API | undefined>{
        return this.http.get<API>(this.url).pipe(
            catchError((error) =>{
                console.log(error)
                return of(undefined)
            })   
        )

    }
}