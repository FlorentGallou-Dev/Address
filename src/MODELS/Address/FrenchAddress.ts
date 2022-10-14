class FrenchAddress extends FranceRegion {

  private street: string
  private region: FranceRegion

  public getStreet(): string {
    return this.street;
  }

  public getRegion(): string {
    return '('+this.region.getCode() + ') ' + this.region.getName();
  }

}