export const taskSchema = {
  taskId: '',
  isDone: false,
  task: '',
};

export const createTaskSchema = (id) => {
  return {
    ...taskSchema,
    taskId: id,
  };
};
