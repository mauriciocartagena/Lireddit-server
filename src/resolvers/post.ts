import { MyContext } from "../types";
import { Resolver, Query, Ctx } from "type-graphql";
import { Post } from "../entities/Post";

@Resolver(Post)
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}
