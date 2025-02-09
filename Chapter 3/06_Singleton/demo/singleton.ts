class TaskQueue {
  private static queue: any[] = [];

  private constructor() {}

  public static getQueue() {
    return this.queue;
  }

  public static addTask(task: any) {
    this.queue.push(task);
  }

  public static removeTask(task: any) {
    this.queue.filter((taskInQueue) => {
      return taskInQueue.id !== task.id;
    });
  }

  public static executeNextTaskInQueue() {
    const nextTask = this.queue.shift();

    nextTask.execute();
  }
}

const taskQueue = new TaskQueue(); // Error!

const queue1 = TaskQueue.getQueue();
const queue2 = TaskQueue.getQueue();

console.log(queue1 === queue2); // true
