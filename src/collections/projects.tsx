import { buildCollection, buildProperty, EntityReference } from "firecms";

export type Project = {
    projectID: string;
    projectTitle: string;
    projectDescription: string;
    projectThumbnailURL: string;
    projectTime: number;
    projectDifficulty: string;
    projectTasks: EntityReference[];
}

export type Task = {
    taskID: string;
    taskTitle: string;
    taskContent: string;
    taskDuration: number;
    taskNumber: number;
}

export const projectTasksSubcollection = buildCollection<Task>({
    name: "Tasks",
    singularName: "Task",
    path: "tasks",
    group: "Projects",
    properties: {
        taskID: {
            name: "Task ID",
            validation: { required: true },
            dataType: "string",
        },
        taskTitle: {
            name: "Task Title",
            validation: { required: true },
            dataType: "string",
        },
        taskContent: {
            name: "Task Content",
            validation: { required: true },
            dataType: "string",
        },
        taskDuration: {
            name: "Task Duration",
            dataType: "number",
        },
        taskNumber: {
            name: "Task Number",
            dataType: "number",
        }
    }
});

export const projectsCollection = buildCollection<Project>({
    name: "Projects",
    singularName: "Project",
    path: "projects",
    icon: "FolderOpen",
    group: "Projects",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
        projectTasksSubcollection
    ],
    properties: {
        projectID: {
            name: "Project ID",
            dataType: "string",
            autoValue: "AUTOGENERATE_UID",
        },
        projectTitle: {
            name: "Project Title",
            validation: { required: true },
            dataType: "string",
        },
        projectDescription: {
            name: "Project Description",
            validation: { required: true },
            dataType: "string",
            multiline: true
        },
        projectThumbnailURL: buildProperty({
            name: "Thumbnail URL",
            dataType: "string",
            storage: {
                storagePath: "projects/thumbnails",
                acceptedFiles: ["image/*"],
            }
        }),
        projectTime: {
            name: "Project Time",
            dataType: "number",
        },
        projectDifficulty: {
            name: "Project Difficulty",
            dataType: "string",
            enumValues: {
                easy: "Easy",
                medium: "Medium",
                hard: "Hard",
            }
        },
        projectTasks: {
            dataType: "array",
            name: "Project Tasks",
            of: {
                dataType: "reference",
                path: "tasks"
            }
        }
    }
});
