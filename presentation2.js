function Presentation2() {

  this.business = new BusinessLayer();

  var body = $("body");
  body.prepend($("<hr>"));
  var header = $("<header>");
  body.prepend(header);
  var title = $("<h1>").text("Bonds manager");
  header.append(title);


  this.bondIssuers = () => {
    var bondIssuers = JSON.parse(localStorage.getItem("bondIssuer"));
    //console.log(bondIssuers);

    var body = $("body");
    var container2Div = $("<div>").addClass("container2");
    body.append(container2Div);

    for (var index = 0; index < bondIssuers.length; index++) {
      var issuer = $("<h2>").html(bondIssuers[index].issuerName);
      var symbol = $("<h4>").html(bondIssuers[index].issuerSymbol);
      var printDiv = $("<div>").addClass("print");
      container2Div.append(printDiv);
      printDiv.append(issuer);
      printDiv.append(symbol);
      var infoBtn = $("<button>").text("More info").attr("class", "btn");
      printDiv.append(infoBtn);

      infoBtn.on("click", async (event) => {
        // console.log("click");
        symbolId = $(event.target).prev().text();
        const test = await this.business.selectBondApiDetails(symbolId);
        // console.log(test);
        localStorage.setItem("bond", JSON.stringify(test));
        this.byeSellBonds();
      });
    }
  };


  this.byeSellBonds = async () => {
    var personal = JSON.parse(localStorage.getItem("bond"));
    var users = JSON.parse(localStorage.getItem("users"));
    // console.log(users);

    var body = $("body").html("");
    body.prepend($("<hr>"));
    var header = $("<header>");
    body.prepend(header);
    var title = $("<h1>").text("Bonds manager of: " + users[0].userName);
    header.append(title);

    var exchangeDiv = $("<div>").text(personal.name + " is traded on " + personal.exchange).attr("class", "sec");
    var pricesDiv = $("<div>").text("Low price:  " + personal.lowPrice + ";" +
      "   Last Price:  " + personal.lastPrice + ";" +
      "   High price:  " + personal.highPrice + ";").attr("class", "sec");
    var volumeDiv = $("<div>").text("Volume of traded bonds: " + personal.volumeOfTrade).attr("class", "sec");
    var btnBuy = $("<button>").text("Buy").attr("class", "btn");
    var input = $("<input>").attr("placeholder", "Amount").css("padding", "5px").css("backgroundColor", "rgba(228, 218, 218, 0.9)");
    var btnSell = $("<button>").text("Sell").attr("class", "btn");

    body.append(exchangeDiv);
    body.append(pricesDiv);
    body.append(volumeDiv);
    body.append(input);
    // body.append("<br>");
    body.append(btnBuy);
    body.append(btnSell);

    var sum = 0;
    btnBuy.on("click", () => {
      var amounth = $(event.target).prev().val();
      var iznos = parseInt(amounth);
      sum = sum + iznos;
      // console.log(sum);
      body.append($("<p>").text("You have " + sum + " in your portfolio"));
    });
    // return sum;
    btnSell.on("click", () => {
      amounth = $(event.target).prev().prev().val();
      iznos = parseInt(amounth);
      sum = sum - iznos;
      body.append($("<p>").text("You have " + sum + " in your portfolio"));
    });
    users.push(sum);
    localStorage.setItem("users", JSON.stringify(users));
    return sum;
  };
}