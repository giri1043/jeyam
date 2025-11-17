export type ProjectStatus = "Not Started" | "In Progress" | "Completed";
export type TaskStatus = "To Do" | "In Progress" | "Done";

export interface Task {
  id: string;
  title: string;
  assignedTo: string;
  status: TaskStatus;
  deadline: string;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: ProjectStatus;
}
