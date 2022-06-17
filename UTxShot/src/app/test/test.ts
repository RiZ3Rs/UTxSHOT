import { Observable } from "rxjs";

export class Test {
    id?:string;
    title?:string;
    description?:string
    image? : Observable<string | null>

    constructor(id? :string, title? :string, description? : string, image? : Observable<string | null>){
        this.id = id
        this.title = title;
        this.description = description;
        this.image = image;
    }

}
