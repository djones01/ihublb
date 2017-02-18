import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { User } from "../shared/models/user";
import { DataService } from "../shared/services/data.service";
import { Router } from "@angular/router";
import { AlertService } from "../shared/alert/alert.service";

@Injectable()
export class UserService {
    private _users: BehaviorSubject<User[]> = new BehaviorSubject([]);
    users: Observable<User[]> = this._users.asObservable();
    private _editUser: BehaviorSubject<User> = new BehaviorSubject(null);
    editUser: Observable<User> = this._editUser.asObservable();

    editing: boolean = false;

    private dataStore: {
        users: User[]
    };

    loadall() {
        this.dataService.GetAll("users")
            .subscribe(users => {
                this.dataStore.users = users;
                this._users.next(Object.assign({}, this.dataStore).users);
            }, error => {
                console.log(error);
                this.alertService.error('Error', 'Encountered error while loading Users');
            });
    }

    setEditUser(editUser: User){ 
        this._editUser.next(editUser);
        this.editing = true;
    }

    add(user: User) {
        this.dataService.Add('users', user).subscribe(user => {
            this.dataStore.users.push(user);
            this._users.next(Object.assign({}, this.dataStore).users);
        }, error => {
            console.log(error);
            this.alertService.error('Error', 'Encountered error while adding User');
        });
    }

    update(user: User) {
        let editId = this._editUser.getValue().id;
        user.id = editId;
        this.dataService.Update('users', editId, user).subscribe(() => {
            this.dataStore.users.forEach((p, i) => {
                if (p.id === user.id) { this.dataStore.users[i] = user; }
            });
            this._users.next(Object.assign({}, this.dataStore).users);
        }, error => {
            console.log(error);
            this.alertService.error('Error', 'Encountered error while updating User');
        });
        this.editing = false;
        this._editUser.next(null);
    }

    delete(id: number) {
        this.dataService.Delete('users', id).subscribe(response => {
            this.dataStore.users.forEach((p, i) => {
                if (p.id === id) { this.dataStore.users.splice(i, 1); }
            });
            this._users.next(Object.assign({}, this.dataStore).users);
        }, error => {
            console.log(error);
            this.alertService.error('Error', 'Encountered error while deleting User');
        });
    }



    constructor(private router: Router, private dataService: DataService, private alertService: AlertService) {
        this.dataStore = { users: [] };
        this.loadall();
    }
}
