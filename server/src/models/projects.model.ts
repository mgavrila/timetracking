import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose'
import type { Ref } from '@typegoose/typegoose'
import { User } from './user.model'
@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the Projects class to be used as TypeScript type
export class Projects {
  @prop()
  name: string

  @prop({ ref: () => User })
  members: Ref<User>[]
}

// Create the user model from the User class
const projectsModel = getModelForClass<typeof Projects>(Projects)
export default projectsModel
