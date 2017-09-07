class Task {

    constructor(id, title, description){
        this._id = id;
        this._title = title;
        this._description = description;
    }

    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }

    get description(){
        return this._description;
    }
}