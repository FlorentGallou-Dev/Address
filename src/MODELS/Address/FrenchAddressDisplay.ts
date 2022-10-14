class FrenchAddressDisplay {

  public print(address: FrenchAddress): String {
    return address.getName() + '\n' + address.getRegion();
  }
}