class AmericanAddressDisplay {

  public print(address: AmericanAddress): String {
    return address.getName() + '\n' + address.getState();
  }
}