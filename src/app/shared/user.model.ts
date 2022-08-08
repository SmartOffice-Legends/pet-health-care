export class UserModel {
  public userId: number;

  public email: string;

  public password: string;

  public name: string;

  public mobileNumber: number;

  // PetPassports model will generate in the future
  public petPassports: Array<object>;

  constructor(
    userId: number,
    email: string,
    password: string,
    name: string,
    mobileNumber: number,
    petPassports: Array<object>,
  ) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.petPassports = petPassports;
  }
}
