import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Project, User, Integration, Conversion, Format } from '../models/index'; 

// Used to control selection of a project/integrations/etc and filtering of subsequent data.
@Injectable()
export class FilteredDataService {
  // Currently selected project
  private _selectedProject: BehaviorSubject<Project> = new BehaviorSubject(null);
  selectedProject: Observable<Project> = this._selectedProject.asObservable();
  // Users in project
  private _projectUsers: BehaviorSubject<User[]> = new BehaviorSubject([]);
  projectUsers: Observable<User[]> = this._projectUsers.asObservable();
  // Integrations in project
  private _projectIntegrations: BehaviorSubject<Integration[]> = new BehaviorSubject([]);
  projectIntegrations: Observable<Integration[]> = this._projectIntegrations.asObservable();

  // Currently selected Integration
  private _selectedIntegration: BehaviorSubject<Integration> = new BehaviorSubject(null);
  selectedIntegration: Observable<Integration> = this._selectedIntegration.asObservable();
  // Conversions in integration
  private _integrationConversions: BehaviorSubject<Conversion[]> = new BehaviorSubject([]);
  integrationConversions: Observable<Conversion[]> = this._integrationConversions.asObservable();

  // Currently selected Conversion
  private _selectedConversion: BehaviorSubject<Conversion> = new BehaviorSubject(null);
  selectedConversion: Observable<Conversion> = this._selectedConversion.asObservable();
  // Formats in Conversion
  private _conversionFormats: BehaviorSubject<Format> = new BehaviorSubject(null);
  conversionFormats: Observable<Format> = this._conversionFormats.asObservable();

  constructor() { }

}
