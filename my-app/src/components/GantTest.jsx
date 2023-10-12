import { Gantt, Task } from "gantt-task-react";
import { useState } from "react";

/*

{% for status, tasks in tasksByStatus %} 
<h2>{{ status }}</h2>
{% for task in tasks %}
<div>{{ task.project.id }}</div> 
<div>{{ task.id }}</div>  id : Indique le projet dans la bdd 1 = pulse-link 
<div>{{ task.description }}</div>
<div>{{ task.name }}</div>
<div>{{ task.status.label }}</div>
<div>{{ task.scheduledDate|date('Y-m-d H:i:s') }}Date de fin</div>
<div>{{ task.duration }} <-Durée du travail</div>
<div>{{ task.description|raw('html') }}</div>

TODO
1 id : Indique le projet dans la bdd 1 = pulse-link
3
<div>Kanbantobo</div>
Kanban
TODO
2023-11-12 10:00:00Date de fin
7 <-Durée du travail
Kanbantobo






  */ /*
const status = "TODO"
const taskProjectId = "1"
const taskId = "3"
const taskDescription = "<div>Kanbantobo</div>"
const taskName = "Kanban"
const taskStatusLabel = "TODO"
const taskScheduleDate = new Date("2023-10-6 10:00:00");
const taskScheduleDateStart = new Date("2023-10-1 10:00:00");
const taskEnd = "7"

const status1 = "TODO"
const taskProjectId1 = "1"
const taskId1 = "1"
const taskDescription1 = "<div>Init the project</div>"
const taskName1 = "Init"
const taskStatusLabel1 = "TODO"
const taskScheduleDate1 = new Date("2023-10-15 10:00:00");
const taskScheduleDateStart1 = new Date("2023-10-07 10:00:00");
const taskEnd1 = "5"


 const currentDate = new Date();
 const [dynamicStartDate, setDynamicStartDate] = useState(currentDate);
 const [dynamicEndDate, setdynamicEndDate] = useState(currentDate);
 const tasks: Task[] = [
   {
     start: dynamicStartDate,
     end: dynamicEndDate,
     name: "Pulse-Link",
     id: taskProjectId,
     progress: 50,
     type: "project",
     hideChildren: false,
     displayOrder: 1,
   },
   {
     start: taskScheduleDateStart,
     end: taskScheduleDate,
     name: taskName,
     id: taskId,
     progress: 45,
     type: "task",
     project: "ProjectSample",
     displayOrder: 2,
   },
   {
     start: taskScheduleDateStart1,
     end: taskScheduleDate1,
     name: taskName1,
     id: taskId1,
     progress: 25,
     dependencies: [taskId],
     type: "task",
     project: "ProjectSample",
     displayOrder: 3,
   },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: ["Task 2"],
      project: "ProjectSample",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Release",
      id: "Task 6",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 4"],
      project: "ProjectSample",
      displayOrder: 7,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];*/

export default function GantTest() {
    const handleStartDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDynamicStartDate(selectedDate);
      };
      const handleEndDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setdynamicEndDate(selectedDate);
      };
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

  const currentDate = new Date();
  const [dynamicStartDate, setDynamicStartDate] = useState(currentDate);
  const [dynamicEndDate, setdynamicEndDate] = useState(currentDate);
  const tasks: Task[] = [
    {
      start: dynamicStartDate,
      end: dynamicEndDate,
      name: "Pulse-Link",
      id: taskProjectId,
      progress: 50,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: taskScheduleDateStart,
      end: taskScheduleDate,
      name: taskName,
      id: taskId,
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: taskScheduleDateStart1,
      end: taskScheduleDate1,
      name: taskName1,
      id: taskId1,
      progress: 25,
      dependencies: [taskId],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
  ];
  return (
    <>
      {/* Step 2: Add input field for dynamic start date */}
      <label htmlFor="start-date">Start Date:</label>
      <input type="date" id="start-date" value={dynamicStartDate.toISOString().split("T")[0]} onChange={handleStartDateChange} />
      <label htmlFor="end-date">End Date:</label>
      <input type="date" id="end-date" value={dynamicEndDate.toISOString().split("T")[0]} onChange={handleEndDateChange} />
      <Gantt tasks={tasks} />
    </>
  );
}
