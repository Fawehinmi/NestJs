import { Query, Resolver } from '@nestjs/graphql';
import { Users } from './users.dto';

@Resolver()
export class UsersResolver {
  // (constructor private readonly usersSvc: ) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
