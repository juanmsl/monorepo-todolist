import uuid from 'uuid';


export class User {
  private _token: string | null;
  private _isActive: boolean;
  private readonly _id: string;

  constructor(
    private _name: string,
    private _lastname: string,
    private _email: string,
    private _username: string,
    private _password: string,
    private _birthDate: Date,
  ) {
    this._id = uuid.v4();
    this._isActive = true;
    this._token = null;
  }

  get name(): string {
    return this._name;
  }

  set name( value: string ) {
    this._name = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname( value: string ) {
    this._lastname = value;
  }

  get email(): string {
    return this._email;
  }

  set email( value: string ) {
    this._email = value;
  }

  get username(): string {
    return this._username;
  }

  set username( value: string ) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password( value: string ) {
    this._password = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate( value: Date ) {
    this._birthDate = value;
  }

  get token(): string | null {
    return this._token;
  }

  set token( value: string | null ) {
    this._token = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive( value: boolean ) {
    this._isActive = value;
  }

  get id(): string {
    return this._id;
  }
}