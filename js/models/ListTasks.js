class ListTasks {

    constructor() {
        this._tasks = [];
    }

    adiciona(task){
        this._tasks.push(task)
    }

    get tasks(){
        return this._tasks;
    }
}