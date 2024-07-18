/* eslint-disable react/prop-types */
function TaskRow({ task, toggleTask }) {
  return (
    <tr>
      <td className="d-flex justify-content-between align-items-center">
        {task.name}
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}

export default TaskRow;
