export const reduceDoneTasks = (tasksArray) => {
  return tasksArray.reduce(
    (total, current) => (current.isDone ? total + 1 : total),
    0
  );
};
