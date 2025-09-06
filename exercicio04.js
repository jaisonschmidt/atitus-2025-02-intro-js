const tasks = [];

// vamos criar duas referencias
// uma referencia ao formulario
// outra referencia ao input

const frmCadastro = document.getElementById("frmCadastro");
const txtTask = document.getElementById("task");
const taskList = document.getElementById("taskList");

frmCadastro.addEventListener("submit", function(evento){
    // previne que o browser recarregue
    evento.preventDefault();

    // vamos adicionar a task no array de tasks
    if (txtTask.value.trim() != "") {
        tasks.push(txtTask.value);
        txtTask.value = "";
        renderTasks();
    }
});

function renderTasks() {
    const tasksText = tasks.join("<br>");
    taskList.innerHTML = tasksText;
}