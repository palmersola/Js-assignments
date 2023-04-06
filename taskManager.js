const taskManager = (function() {
  let tasks = [];
  function addTasks(a) {
    return tasks.push(a);
  }

  function displayTasks() {
    console.log(tasks);
  }
  return {
    addTasks,
    displayTasks
  };
})();

taskManager.addTasks("test 1");
taskManager.addTasks("test 2");
taskManager.addTasks("test 3");
taskManager.displayTasks();
