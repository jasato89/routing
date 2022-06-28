export class Post {
    constructor(private _userId: number, private _id: number, private _title: string, private _body: string ) {
    }
    

    get userId(): number {
        return this._userId;
    }
    set userId(value: number) {
        this._userId = value;
    }
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
    get title(): string {
        return this._title;
    }
    set title(value: string) {
        this._title = value;
    }
    get body(): string {
        return this._body;
    }
    set body(value: string) {
        this._body = value;
    }
}
