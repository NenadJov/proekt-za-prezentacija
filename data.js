function DataLayer() {

  this.bondData = {};
  this.bondDetails = {};
  this.persistanceObject = new BondApi();

  this.populateBondApiData = async () => {
    this.bondData = await this.persistanceObject.getBondApiData();
    //console.log(this.bondData);
  };

  this.getBondApiData = () => {
    return this.bondData;
  };



  this.populateBondApiDetails = async (symbolId) => {
    this.bondDetails = await this.persistanceObject.getBondApiDetails(symbolId);
    // console.log(this.bondDetails);
  };

  this.getBondApiDetails = () => {
    return this.bondDetails;
  };
}