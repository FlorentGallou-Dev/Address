class FranceRegion {

  private code: string
  private name: string

  constructor(parameters) {
    this.code = parameters.code
    this.name = parameters.name
  }

  public getCode(): string {
    return this.code;
  }
  public getName(): string {
    return this.name;
  }

}