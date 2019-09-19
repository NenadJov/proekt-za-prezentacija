function BusinessLayer() {

  this.dataObject = new DataLayer();

  this.selectBondApiData = async () => {
    await this.dataObject.populateBondApiData();
    var data = this.dataObject.getBondApiData();
    // console.log(data);

    //pravime logika za da kreirame objekt so podatoci koj sto ni trebaat, 
    //za da ne ja predavame celata data od APIto vo presentaion layerot
    var issuers = [];
    var allIssuers = data.results;
    for (let index = 0; index < allIssuers.length; index++) {
      var tempObject = {
        issuerName: allIssuers[index].name,
        issuerSymbol: allIssuers[index].symbol
      };
      issuers.push(tempObject);
    }
    console.log(issuers);
    //Ova e finalniot objekt koj sto ke go smestime vo localStorage 
    //i ke go koristime vo presentation layerot
    localStorage.setItem("bondIssuer", JSON.stringify(issuers));
    //polnime localStorage so key bondIssuer i value string od objektot issuers
  };

  this.selectBondApiDetails = async (symbolId) => {
    await this.dataObject.populateBondApiDetails(symbolId);
    var bondDetails = this.dataObject.getBondApiDetails();
    // console.log(bondDetails);

    var infoData = [];
    var allData = bondDetails;
    // console.log(allData);

    var infoData = {
      name: allData.results[0].name,
      exchange: allData.results[0].exchange,
      highPrice: allData.results[0].high,
      lastPrice: allData.results[0].lastPrice,
      lowPrice: allData.results[0].low,
      volumeOfTrade: allData.results[0].volume
    };

    // console.log(infoData);
    return infoData;
  };
}