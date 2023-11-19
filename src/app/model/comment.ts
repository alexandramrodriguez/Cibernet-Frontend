import { User } from "./user"

export class Comment {
    id?: number
    userId?: number
    user?: User
    content?: string
    publicationDate?: string
    postId?: number
}
