function BondApi() {

  this.getBondApiData = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          "https://marketdata.websol.barchart.com/getQuote.json?apikey=a279fdafc269d4805797d2993e16ff23&symbols=SAN,BCS,CS,DB,HSBC,ING,RBS,UBS",
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        }
      });
    });
  };

  this.getBondApiDetails = (symbolId) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          // "https://marketdata.websol.barchart.com/getQuote.json?apikey=5aa714f660223840221cb4e74871469d&symbols=" + symbolId ,
          "https://marketdata.websol.barchart.com/getQuote.json?apikey=a279fdafc269d4805797d2993e16ff23&symbols=CS",
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        }
      });
    });
  };
}
