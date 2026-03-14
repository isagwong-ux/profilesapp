import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { resource as postConfirmation } from "../auth/post-confirmation/resource";

// Define the schema
const schema = a
  .schema({
    UserProfile: a
      .model({
        email: a.string(),
        profileOwner: a.string(),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("profileOwner"), // per-owner access
      ]),
  })
  .authorization((allow) => [
    allow.resource(postConfirmation), // allows the post-confirmation Lambda
  ]);

// Type for the client
export type Schema = ClientSchema<typeof schema>;

// Define the data store with authorization modes
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
