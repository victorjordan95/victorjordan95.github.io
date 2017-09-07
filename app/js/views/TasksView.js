class TasksView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        return `
            
            ${model.tasks.map(n => {
                return `
                    <div class="activities" onclick="taskController.edt(${model.tasks.indexOf(n)})">
                        <div class="activity">
                            <div class="activity-body">
                                <span class="icon icon-check icon-middle"></span>
                                <span class="activity-text">${n.title}</span>
                                <span class="icon icon-right is-right icon-middle"></span>
                                <span class="icon icon-circle is-right icon-middle"></span>
                            </div>
                        </div>
                    </div>
                `
            }).join('')}
        `;
    };

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}

                 