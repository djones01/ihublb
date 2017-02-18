import { IntegrationSchedule } from './integration-schedule';
import { Conversion } from './conversion';

export interface Integration {
    name: string;
    description: string;
    source_system: string;
    target_system: string;
    source_system_release: string;
    target_system_release: string;
    schedule: IntegrationSchedule;
    conversions: Conversion[];
    effective_date: Date;
    active: boolean;
    hidden: boolean;
}