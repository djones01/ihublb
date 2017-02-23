import { Integration, ProjectUser } from './index';

export interface Project {
    id?: number;
    name: string;
    description?: string;
    type: ProjectType;
    effective_date: Date;
    integrations: Integration[];
    projectUsers: ProjectUser[]; 
}

export class Project implements Project {
    constructor(
        public name: string,
        public type: ProjectType,
        public description?: string
    ){}
}

type ProjectType = 'Upgrade' | 'Enhancement' | 'New Installation' | 'Retrofit';