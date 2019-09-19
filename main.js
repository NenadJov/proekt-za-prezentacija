function main() {

    var data = new DataLayer();
    data.populateBondApiData();
    
    var data = new BusinessLayer();
    data.selectBondApiData();
     // data.resolveAlbumDetails();
  

    var presentation = new Presentation();
    //presentation.bondIssuers();
    presentation.displayHtml();
  }
  
main();