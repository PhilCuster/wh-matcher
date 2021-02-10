import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class User {
    constructor(
        public id: string
    ) {}
}

@Injectable({
    providedIn: "root",
})
export class UserAdapter implements Adapter<User> {
  adapt(item: any): User {
    return new User(item.id);
  }
}