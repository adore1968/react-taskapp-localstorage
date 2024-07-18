/* eslint-disable react/prop-types */
function VisibilityControl({ showCompleted, setShowCompleted, clearTasks }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      clearTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary align-items-center">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          name="show-tasks-done"
          id="show-tasks-done"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        <label htmlFor="show-tasks-done">Show Tasks Done</label>
      </div>
      <button
        type="button"
        onClick={handleDelete}
        className="btn btn-danger btn-sm"
      >
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;
