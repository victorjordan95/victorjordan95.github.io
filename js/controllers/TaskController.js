class TaskController {

    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputId = $("#activity-id");
        this._inputTitle = $("#activity-title");
	    this._inputDescription = $("#activity-description");
        this._listaTasks = new ListTasks();
        this._taskView = new TasksView($('#tasksView'));
        
        this.addDefault();
        this._taskView.update(this._listaTasks);

    }

    addDefault(){
        this._listaTasks.adiciona(this._criaTask(
            "1",
            "Work it harder",
            "Some description"
        ));
        this._listaTasks.adiciona(this._criaTask(
            "2",
            "Make it better",
            "Some description"
        ));
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();
    };

    adiciona(event) {
        event.preventDefault();
        
        //Verifica se o input está vazio e chama a respectiva função
        if(!this._inputId.value){
          this._inputId.value = this._listaTasks.tasks.length + 1;
          this._listaTasks.adiciona(this._criaTask(this._inputId.value, this._inputTitle.value, this._inputDescription.value));
        //edt
        } else {
          this._listaTasks.tasks.splice(this._inputId.value - 1, 1, this._criaTask(this._inputId.value, this._inputTitle.value, this._inputDescription.value));
        }
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();
    };

    _criaTask(id, title, desc){
        return new Task(
            id,
            title,
            desc
        );
    };
  
    edt(n) {
        console.log(this._listaTasks.tasks[n]);

        var task = this._listaTasks.tasks[n];
        console.log("minha task: " + task);
        
        this._inputId.value = task.id;
        this._inputTitle.value = task.title;
        this._inputDescription.value = task.description;
                
        openTask();
    }

    _limpaFormulario() {
        this._inputId.value = null;
        this._inputTitle.value = null;
        this._inputDescription.value = null;
        this._inputTitle.focus();
    };

};