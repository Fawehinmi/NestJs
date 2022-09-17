import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

export enum UserStatusTypes {
  Active = 'active',
  InActive = 'inactive',
}

export enum UserRoleTypes {
  SuperAdmin = 'SuperAdmin',
  Member = 'Member',
  CooperateAdmin = 'CooperateAdmin',
}

@Schema()
export class User {
  _id: Types.ObjectId;
  @Prop({ default: true })
  active: boolean;
  @Prop()
  referralId: string;
  @Prop()
  username: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  otherName: string;
  @Prop()
  email: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
