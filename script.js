window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const inputTask = document.getElementById("new-task-input");
  const tasklist = document.getElementById("tasks");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = inputTask.value;
    if (inputTask.value.trim() === "") {
      return;
    }

    inputTask.value = "";
    const taskEle = document.createElement("div");
    taskEle.classList.add("task");

    const taskContEle = document.createElement("div");
    taskContEle.classList.add("content");

    const inputEle = document.createElement("input");
    inputEle.classList.add("text");
    inputEle.type = "text";
    inputEle.value = task;

    inputEle.setAttribute("readonly", "readonly");

    const actionEle = document.createElement("div");
    actionEle.classList.add("actions");

    const editEle = document.createElement("button");
    editEle.classList.add("edit");
    editEle.innerHTML = "Edit";

    const delEle = document.createElement("button");
    delEle.classList.add("delete");
    delEle.innerHTML = "Delete";

    actionEle.appendChild(editEle);
    actionEle.appendChild(delEle);

    taskContEle.appendChild(inputEle);
    taskContEle.appendChild(actionEle);

    taskEle.appendChild(taskContEle);
    tasklist.append(taskEle);
    taskEle.addEventListener("click", (e) => {
      if (e.target.innerText === "Edit") {
        editEle.innerText = "Save";
        inputEle.removeAttribute("readonly");
        inputEle.focus();
      } else if (e.target.innerText === "Save") {
        editEle.innerText = "Edit";
        inputEle.setAttribute("readonly", "readonly");
      } else if (e.target.innerText === "Delete") {
        tasklist.removeChild(e.currentTarget);
      }
    });
  });
});
