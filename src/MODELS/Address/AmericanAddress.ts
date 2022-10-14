class AmericanAddress extends AmericanState {

  private street: string
  private state: AmericanState

  public getStreet(): string {
    return this.street;
  }

  public getState(): string {
    return this.state.getName() + ' (' + this.state.getShort() + ')';
  }

}