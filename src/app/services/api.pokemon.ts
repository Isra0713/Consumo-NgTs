import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Pokemon  } from "../interfaces/api.interfacePoke";



@Injectable({
    providedIn: 'root',
})
export class ApiPokemon{

    constructor( private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon/';

    getApi():  Observable<Pokemon  | undefined>{
        return this.http.get<Pokemon >(this.url).pipe(
            catchError((error) =>{
                console.log(error)
                return of(undefined)
            })   
        )

    }
}