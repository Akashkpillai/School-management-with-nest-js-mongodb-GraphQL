import { Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver{
@Query(returns => LessonType)
    lesson() {
        return {
            id:"123",
            name:"physics",
            startDate:new Date(),
            endDate:new Date()
        }
    }
}
