export class UserModel {
  private userId: number;

  private email: string;

  private password: string;

  private firstName?: string | undefined;

  private secondName?: string | undefined;

  private lastName?: string | undefined;

  private mobileNumber?: number | undefined;

  // PetPassports model will generate in the future
  private petPassports?: Array<object> | undefined;

  constructor(
    userId: number,
    email: string,
    password: string,
    firstName?: string,
    secondName?: string,
    lastName?: string,
    mobileNumber?: number,
    petPassports?: Array<object>,
  ) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.secondName = secondName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
    this.petPassports = petPassports;
  }

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(value: number) {
    this.userId = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string) {
    this.email = value;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(value: string) {
    this.password = value;
  }

  public getFirstName(): string | undefined {
    return this.firstName;
  }

  public setFirstName(value: string | undefined) {
    this.firstName = value;
  }

  public getSecondName(): string | undefined {
    return this.secondName;
  }

  public setSecondName(value: string | undefined) {
    this.secondName = value;
  }

  public getLastName(): string | undefined {
    return this.lastName;
  }

  public setLastName(value: string | undefined) {
    this.lastName = value;
  }

  public getMobileNumber(): number | undefined {
    return this.mobileNumber;
  }

  public setMobileNumber(value: number | undefined) {
    this.mobileNumber = value;
  }

  public getPetPassports(): Array<object> | undefined {
    return this.petPassports;
  }

  public setPetPassports(value: Array<object> | undefined) {
    this.petPassports = value;
  }
}
