import TaskRow from "./TaskRow";

/* eslint-disable react/prop-types */
function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task, index) => (
        <TaskRow key={index} task={task} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
