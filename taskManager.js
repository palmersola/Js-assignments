let tasks = [];

const addTask = function(task) {
  return tasks.push(task);
};

const displayTasks = function(tasks) {
  console.log(tasks);
};

addTask("test");
addTask("test 1");
addTask("test 2");
displayTasks(tasks);
