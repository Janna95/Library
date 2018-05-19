import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";

@Injectable()

export class LibraryService {
    constructor( private http: Http) {}

    getLibrary() {
       return this.http.get('http://localhost:3000/library')
       .map((response:Response) => response.json());
    }

    
}