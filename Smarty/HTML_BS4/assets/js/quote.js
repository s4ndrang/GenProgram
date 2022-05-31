// 0. Building Type
$(document).ready(function() { 
    $(".all").hide();      
    $("#bdgType").change(function() {
        let bType = $("#bdgType").value;
        if (bType == "Residential") {
            $(".res").show();
        } else if (bType == "Commercial") {
            $(".comm").show();
        } else if (bType == "Corporate") {
            $(".corp").show();
        } else if (bType == "Hybrid") {
           $(".hyb").show();
        }
    });

// 1. Number of Elevators

    var numElevComm, numElevRes, numElevCorp, numElevHyb;
    
    function calculRes() {
        Math.floor(numApartment / numUppLevel / 6)*Math.floor(numUppLevel / 20);
    }

    function calculCorpHyb() {
        let numElev = Math.floor(numOccupant*(numUppLevel + numBasement)/1000);
        let numColumn = Math.floor(numUppLevel + numBasement)/20;
        let numElevPerColumn = Math.floor(numElev / numColumn);
        numElevCorpHyb = numElevPerColumn*numColumn;
    }

    numElevCorp = numElevHyb = numElevCorpHyb;
 
        if (bType == "Residential") {
            numElevRes.calculRes();
        } else if (bType == "Commercial") {
            numElevComm = numCage;
        } else if (bType == "Corporate") {
            numElevCorp.calculCorpHyb();
        } else if (bType == "Hybrid") {
            numElevHyb.calculCorpHyb();
        }    
    alert(numElevRes);
    alert(numElevComm);
    alert(numElevCorp);
    alert(numElevHyb);
    
    document.getElementById("numberOfElev").innerHTML = numElevRes;
    document.getElementById("numberOfElev").innerHTML = numElevComm;
    document.getElementById("numberOfElev").innerHTML = numElevCorp;
    document.getElementById("numberOfElev").innerHTML = numElevHyb;

// 2. Elevator Unit Price
    let packageName = [standard, premium, excelium];
    let packageUnitPrice = [7565, 12345, 15400];
    document.getElementById("displayArrPairs").innerHTML = (packageName, packageUnitPrice)
    $(".pricePkg").select();
    let unitPrice = this.value;
    document.getElementById("displayUnitPrice") = unitPrice;

// 3. Price of Elevators
    let priceElev = unitPrice*numOfElev;
    document.getElementById("displayElevPrice") = priceElev;

// 4. Installation Fees
    let installFee = unitPrice*installFee;
    if (".pricePkg" == "standard") {
        document.getElementById("stdUnitPrice").innerHTML = "$7565";
    }
    else if (".pricePkg" == "premium") {
        document.getElementById("prem}UnitPrice").innerHTML = "$12345";
    }
    else (chosenPkg == "excelium") {
        document.getElementById("excUnitPrice").innerHTML = "$15400";
    }

})




// 5. Total Price