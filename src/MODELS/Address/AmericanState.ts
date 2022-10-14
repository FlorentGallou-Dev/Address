class AmericanState {

  private short: string
  private name: string

  constructor(parameters) {
    this.short = parameters.short
    this.name = parameters.name
  }

  public getShort(): string {
    return this.short;
  }
  public getName(): string {
    return this.name;
  }

}