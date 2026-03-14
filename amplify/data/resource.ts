import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum UserProfileFields {
  USERNAME = "username",
  EMAIL = "email",
  PROFILE_OWNER = "profileOwner",
}

export type UserProfile = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly profileOwner: string;
};

export const UserProfileModel: PersistentModelConstructor<UserProfile> = class UserProfile {
  constructor(init: ModelInit<UserProfile>) {}
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => void): UserProfile {
    return source;
  }
};
