// Filter + Map: Average Performance
// Write a function to get an array of names for employees whose average performance score is greater than or equal to 4.5.
// Reduce + Filter: Total Salary in a Department
// Calculate the total salary of all employees in the Engineering department.
// Nested Map: Total Hours for Completed Projects
// Write a function to get an array of objects where each object has the name of an employee and the total hoursSpent on their completed projects.
// Sort + Nested Filters: Top Performer in Engineering
// Identify the top performer in the Engineering department based on their total performance scores.
// Custom Sorting: Projects by Hours
// For each employee, sort their projects array by hoursSpent in descending order.
// Complex Filter: Employees with Long Projects
// Get the names of employees who have at least one project with more than 150 hours spent.
// FlatMap + Reduce: Total Hours in Progress
// Calculate the total hoursSpent on all in-progress projects across all employees.
// Group by Department: Salaries Above Threshold
// Write a function to return an object where keys are department names, and values are arrays of employees earning more than $70,000 in that department.
// Complex Query: Highly Paid and High Performer
// Identify employees who belong to the Engineering department, have a total performance score greater than 17, and earn more than $90,000.
// Advanced Metrics: Project Efficiency
// For each employee, calculate their efficiency as total performance score / total hours spent on projects and return an array of objects with their name and efficiency, sorted in descending order of efficiency.
/////bodolgo
const employees = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering",
    salary: 85000,
    performance: [4, 5, 3, 4],
    projects: [
      { projectId: "P101", status: "completed", hoursSpent: 120 },
      { projectId: "P102", status: "in-progress", hoursSpent: 60 },
    ],
  },
  {
    id: 2,
    name: "Bob",
    department: "HR",
    salary: 60000,
    performance: [3, 4, 4, 3],
    projects: [
      { projectId: "P201", status: "completed", hoursSpent: 90 },
      { projectId: "P202", status: "completed", hoursSpent: 110 },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    department: "Engineering",
    salary: 95000,
    performance: [5, 5, 4, 5],
    projects: [
      { projectId: "P301", status: "completed", hoursSpent: 200 },
      { projectId: "P302", status: "in-progress", hoursSpent: 80 },
    ],
  },
  {
    id: 4,
    name: "Diana",
    department: "Marketing",
    salary: 72000,
    performance: [4, 4, 4, 3],
    projects: [
      { projectId: "P401", status: "completed", hoursSpent: 150 },
      { projectId: "P402", status: "in-progress", hoursSpent: 50 },
    ],
  },
  {
    id: 5,
    name: "Edward",
    department: "Sales",
    salary: 65000,
    performance: [3, 4, 3, 2],
    projects: [
      { projectId: "P501", status: "completed", hoursSpent: 100 },
      { projectId: "P502", status: "in-progress", hoursSpent: 70 },
    ],
  },
  {
    id: 6,
    name: "Fiona",
    department: "Finance",
    salary: 90000,
    performance: [5, 4, 5, 4],
    projects: [
      { projectId: "P601", status: "completed", hoursSpent: 160 },
      { projectId: "P602", status: "completed", hoursSpent: 140 },
    ],
  },
  {
    id: 7,
    name: "George",
    department: "Engineering",
    salary: 87000,
    performance: [4, 3, 4, 4],
    projects: [
      { projectId: "P701", status: "completed", hoursSpent: 130 },
      { projectId: "P702", status: "in-progress", hoursSpent: 90 },
    ],
  },
  {
    id: 8,
    name: "Hannah",
    department: "HR",
    salary: 62000,
    performance: [3, 3, 4, 3],
    projects: [
      { projectId: "P801", status: "completed", hoursSpent: 80 },
      { projectId: "P802", status: "in-progress", hoursSpent: 50 },
    ],
  },
  {
    id: 9,
    name: "Irene",
    department: "Marketing",
    salary: 78000,
    performance: [4, 5, 5, 4],
    projects: [
      { projectId: "P901", status: "completed", hoursSpent: 140 },
      { projectId: "P902", status: "completed", hoursSpent: 160 },
    ],
  },
  {
    id: 10,
    name: "Jack",
    department: "Sales",
    salary: 72000,
    performance: [4, 4, 3, 4],
    projects: [
      { projectId: "P1001", status: "completed", hoursSpent: 110 },
      { projectId: "P1002", status: "in-progress", hoursSpent: 70 },
    ],
  },
  {
    id: 11,
    name: "Karen",
    department: "Finance",
    salary: 85000,
    performance: [4, 4, 4, 5],
    projects: [
      { projectId: "P1101", status: "completed", hoursSpent: 120 },
      { projectId: "P1102", status: "completed", hoursSpent: 140 },
    ],
  },
  {
    id: 12,
    name: "Liam",
    department: "Engineering",
    salary: 93000,
    performance: [5, 5, 4, 5],
    projects: [
      { projectId: "P1201", status: "completed", hoursSpent: 210 },
      { projectId: "P1202", status: "in-progress", hoursSpent: 100 },
    ],
  },
];
