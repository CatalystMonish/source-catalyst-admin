import { buildCollection, buildProperty } from "firecms";

export type User = {
    displayName: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
}

export const usersCollection = buildCollection<User>({
    name: "Users",
    singularName: "User",
    path: "Users",
    icon: "Person",
    group: "Management",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
       
        displayName: {
            name: "Display Name",
            dataType: "string",
            validation: { required: true },
        },
        email: {
            name: "Email",
            dataType: "string",
            validation: { required: true, email: true },
        },
        emailVerified: {
            name: "Email Verified",
            dataType: "boolean",
        },
        photoURL: {
            name: "Photo URL",
            dataType: "string",
            
        },
        
    }
});
