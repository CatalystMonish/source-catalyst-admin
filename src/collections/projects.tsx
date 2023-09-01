import { buildCollection, buildProperty, EntityReference } from "firecms";

export type Project = {
    projectTitle: string;
    projectDescription: string;
    projectThumbnail: string;
    projectAuthor: string;
    projectRating: number;
    projectTime: number;
    projectPostedTime: number;
    projectDifficulty: string;
    projectCategory: string;
    skills: EntityReference[];
    projectType: number[];
}


export type ProjectTask = {
    taskNumber: number;
    taskTitle: string;
    taskPreText: string;
    taskPostText: string;
    taskCode?: string;  // optional
    taskDocumentLink?: string;  // optional
    taskVideoLink?: string;  // optional
}
export const projectTasksSubcollection = buildCollection<ProjectTask>({
    name: "Project Tasks",
    singularName: "Project Task",
    path: "tasks",
    properties: {
        taskNumber: {
            name: "Task Number",
            dataType: "number",
            validation: { required: true }
        },
        taskTitle: {
            name: "Task Title",
            dataType: "string",
            validation: { required: true }
        },
        taskPreText: {
            name: "Task Pre Text",
            dataType: "string",
            validation: { required: true },
            multiline: true
        },
        taskPostText: {
            name: "Task Post Text",
            dataType: "string",
            validation: { required: true },
            multiline: true
        },
        taskCode: {
            name: "Task Code",
            dataType: "string",
            multiline: true
        },
        taskDocumentLink: {
            name: "Task Document Link",
            dataType: "string"
        },
        taskVideoLink: {
            name: "Task Video Link",
            dataType: "string"
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
    properties: {

        projectTitle: {
            name: "Project Title",
            validation: { required: true},
            dataType: "string",
        },
        projectDescription: {
            name: "Project Description",
            validation: { required: true},
            dataType: "string",
            multiline: true
        },
        projectThumbnail: buildProperty({
            name: "Project Thumbnail",
            dataType: "string",
            storage: {
                storagePath: "projects/thumbnails",
                acceptedFiles: ["image/*"],
            }
        }),
        projectAuthor: {
            name: "Author",
            dataType: "string",
        },
        projectRating: {
            name: "Project Rating",
            dataType: "number",
        },
        projectTime: {
            name: "Project Time",
            dataType: "number",
        },
        projectPostedTime: {
            name: "Posted Time",
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
        projectCategory: {
            name: "Project Category",
            dataType: "string",
            enumValues: {
                python: "Python",
                android: "Android",
                web: "Web Development",
                iot: "IOT",
                industrial: "Industrial Automation"
            }
        },
        skills: {
            name: "Skills",
            dataType: "array",
            of: {
                dataType: "reference",
                path: "skills"
            }
        },
        projectType: {
            name: "Project Type",
            dataType: "array",
            of: {
                dataType: "number" // Change to "number"
            },
            validation: { required: true }
        }
        
    },subcollections: [
        projectTasksSubcollection
    ]
    
}
);
