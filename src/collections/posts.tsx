import { buildCollection, buildProperty } from "firecms";

export type Post = {
    likes: number;
    postAuthor: string;
    postContent: string;
    postTitle: string;
}

export const postsCollection = buildCollection<Post>({
    name: "Posts",
    singularName: "Post",
    path: "posts", // this is the path where the collection will be stored in Firestore
    icon: "Article",
    group: "Datas",
    properties: {
        likes: {
            name: "Likes",
            dataType: "number",
            validation: { required: true, min: 0 }
        },
        postAuthor: {
            name: "Post Author",
            dataType: "string",
            validation: { required: true }
        },
        postContent: {
            name: "Post Content",
            dataType: "string",
            validation: { required: true }
        },
        postTitle: {
            name: "Post Title",
            dataType: "string",
            validation: { required: true }
        }
    }
});
