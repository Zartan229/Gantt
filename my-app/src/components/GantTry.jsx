import { Gantt, Task, ViewMode } from "gantt-task-react";
import { useState } from "react";


const ViewSwitcher = ({ onViewModeChange, onViewListChange, isChecked }) => {
    return (
      <div className="ViewContainer">
        <button className="Button" onClick={() => onViewModeChange(ViewMode.Hour)}>
          Hour
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.QuarterDay)}>
          Quarter of Day
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.HalfDay)}>
          Half of Day
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.Day)}>
          Day
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.Week)}>
          Week
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.Month)}>
          Month
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.Year)}>
          Year
        </button>
        <div className="Switch">
          <label className="Switch_Toggle">
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onClick={() => onViewListChange(!isChecked)}
            />
            <span className="Slider" />
          </label>
          Show Task List
        </div>
      </div>
    );
  };




export default function GantTry() {
    const status = "TODO";
    const taskProjectId = "1";
    const taskId = "3";
    const taskDescription = "<div>Kanbantobo</div>";
    const taskName = "Kanban";
    const taskStatusLabel = "TODO";
    const taskScheduleDate = new Date("2023-10-6 10:00:00");
    const taskScheduleDateStart = new Date("2023-10-1 10:00:00");
    const taskEnd = "7";
  
    const status1 = "TODO";
    const taskProjectId1 = "1";
    const taskId1 = "1";
    const taskDescription1 = "<div>Init the project</div>";
    const taskName1 = "Init";
    const taskStatusLabel1 = "TODO";
    const taskScheduleDate1 = new Date("2023-10-15 10:00:00");
    const taskScheduleDateStart1 = new Date("2023-10-07 10:00:00");
    const taskEnd1 = "5";












  const [tasks, setTasks] = useState([
    {
      id: taskId,
      name: taskName,
      type: "task",
      start: new Date("2023-10-10"),
      end: new Date("2023-10-15"),
    },
    {
      id: taskId1,
      name: taskName1,
      type: "task",
      dependencies: [taskId],
      start: new Date("2023-10-12"),
      end: new Date("2023-10-18"),
    },
    // Add more tasks as needed
  ]);

  const [view, setView] = useState(ViewMode.Day);
  const [isChecked, setIsChecked] = useState(true);

  // Determine column width based on the selected view mode
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task) => {
    console.log("On date change Id:" + task.id);
    const newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(newTasks);
  };

  const handleTaskDelete = (task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task, isSelected) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div className="App">
      <ViewSwitcher onViewModeChange={(viewMode) => setView(viewMode)} onViewListChange={setIsChecked} isChecked={isChecked} />
      <h1>Charte des projets</h1>
      <Gantt
        tasks={tasks}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
    </div>
  );
}
