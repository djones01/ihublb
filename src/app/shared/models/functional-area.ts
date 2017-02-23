import { ProjectUser } from './project-user';
import { Integration } from './index';

export interface FunctionalArea {
    id?: number;
    name: string;
    description?: string;
    integrations?: Integration[];
    effective_date?: Date;
    projectUsers?: ProjectUser[];
}