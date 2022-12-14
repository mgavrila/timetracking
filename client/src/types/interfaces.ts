import { ApplicationRoles } from '../constants/enums'

export interface UserInterface {
  createdAt: string | null
  email: string | null
  id: string | null
  name: string | null
  role: ApplicationRoles
  updatedAt: string | null
}

export interface AddProjectFieldsInterface {
  projectName: string
  members: Array<string | never>
}

export interface NewTeamFieldsInterface {
  teamName: string
  members: Array<string | never>
}
