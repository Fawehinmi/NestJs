import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users {
  @Field((type) => ID)
  _id: string;
  @Field()
  id: string;
  @Field((type) => String, { nullable: true })
  referralId: string;
  @Field((type) => String, { nullable: true })
  idNumber: string;
  @Field((type) => String, { nullable: true })
  username: string;
  @Field()
  firstName: string;
  @Field((type) => String, { nullable: true })
  lastName: string;
  @Field((type) => String, { nullable: true })
  fullName: string;
  @Field((type) => String, { nullable: true })
  otherName: string;
  @Field((type) => String, { nullable: true })
  email: string;
  @Field((type) => String, { nullable: true })
  phoneNumber: string;
  @Field()
  active: Boolean;
  //   @Field((type) => [AccountRoleTypes])
  //   roles: Array<AccountRoleTypes>;
  @Field((type) => String, { nullable: true })
  address: string;
  @Field((type) => String, { nullable: true })
  latitude: string;
  @Field((type) => String, { nullable: true })
  longitude: string;
}
