// 0. Building Type
$(document).ready(function() { 
    $(".all").hide();
    // Building type event listener
    $("#bdgType").change(function() {
        $(".all").hide();
        refreshFields();
    });
    
    $(".quote-input").on("input", function() {
        refreshFields();
    })

})

function refreshFields() {
    let bType = $("#bdgType").find(':selected').text();
    if (bType == "Residential") {
        $(".res").show();
        calculRes();
    } else if (bType == "Commercial") {
        $(".comm").show();
        calculComm();
    } else if (bType == "Corporate") {
        $(".corp").show();
        calculCorp();
    } else if (bType == "Hybrid") {
        $(".hyb").show();
        calculCorp();
    }
}

// RESIDENTIAL
       
            function calculRes() {
                let productType = $("input[name='pdtline']:checked").val();
                let unitPrice;
                let installationFeesMultiplier;

                if (productType == "Standard") {
                    unitPrice = 7565;
                    installationFeesMultiplier = 0.1;
                } else if(productType == "Premium") {
                    unitPrice = 12345;
                    installationFeesMultiplier = 0.13;
                } else if(productType == "Excelium") {
                    unitPrice = 15400;
                    installationFeesMultiplier = 0.16;
                }       
            
                // do calculations 
                let numApartment = parseInt($("#numApartment").val());
                let numUppLevel = parseInt($("#numUppLevel").val());

                let avgApartmentsPerFloor = numApartment / numUppLevel;
                let numElevRes = Math.ceil(avgApartmentsPerFloor / 6);
                let numColumnRes = Math.ceil(numUppLevel/20);
                let numElevNeeded = numElevRes * numColumnRes;

                let totalElevPrice = unitPrice*numElevNeeded;
                let installFee = installationFeesMultiplier*totalElevPrice;
                let finalPrice = totalElevPrice + installFee;
            
                // show results
                $("#numOfElev").val(numElevNeeded);
                $("#unitPrice").val(unitPrice);
                $("#totalPrice").val(totalElevPrice);
                $("#installFee").val(installFee);
                $("#finalPrice").val(finalPrice);
            }
// COMMERCIAL
            function calculComm() {
                let productType = $("input[name='pdtline']:checked").val();
                let unitPrice;
                let installationFeesMultiplier;
                if (productType == "Standard") {
                    unitPrice = 7565;
                    installationFeesMultiplier = 0.1;
                } else if(productType == "Premium") {
                    unitPrice = 12345;
                    installationFeesMultiplier = 0.13;
                } else if(productType == "Excelium") {
                    unitPrice = 15400;
                    installationFeesMultiplier = 0.16;
                }
            
                // do calculations 
                var numCage1 = $("#numCage").val();
                    numCage1 = parseInt(numCage1);
                numElevNeeded = numCage1;
                
                totalElevPrice = unitPrice*numCage1;
                installFee = installationFeesMultiplier*totalElevPrice;
                finalPrice = totalElevPrice + installFee;
            
                // show results
                $("#numOfElev").val(numElevNeeded);
                $("#unitPrice").val(unitPrice);
                $("#totalPrice").val(totalElevPrice);
                $("#installFee").val(installFee);
                $("#finalPrice").val(finalPrice);
            }
// CORPORATE
            function calculCorp() {
                let productType = $("input[name='pdtline']:checked").val();
                let unitPrice;
                let installationFeesMultiplier;
                if (productType == "Standard") {
                    unitPrice = 7565;
                    installationFeesMultiplier = 0.1;
                } else if(productType == "Premium") {
                    unitPrice = 12345;
                    installationFeesMultiplier = 0.13;
                } else if(productType == "Excelium") {
                    unitPrice = 15400;
                    installationFeesMultiplier = 0.16;
                }
            
                // do calculations 
                let numOccupant = parseInt($("#numOccupant").val());    
                let numUppLevel = parseInt($("#numUppLevel").val()); 
                let numBasement = parseInt($("#numBasement").val());  

                let totalNumFloors = numUppLevel + numBasement;
                let totalNumOccup = numOccupant*totalNumFloors;
                let numElev = Math.ceil(totalNumOccup/1000);
                let numColumn = Math.ceil(totalNumFloors/20);
                let numElevPerColumn = Math.ceil(numElev / numColumn);
                numElevNeeded = numElevPerColumn * numColumn;
                totalElevPrice = unitPrice*numElevNeeded;
                installFee = installationFeesMultiplier*totalElevPrice;
                finalPrice = totalElevPrice + installFee;
            
                // show results
                $("#numOfElev").val(numElevNeeded);
                $("#unitPrice").val(unitPrice);
                $("#totalPrice").val(totalElevPrice);
                $("#installFee").val(installFee);
                $("#finalPrice").val(finalPrice);
            }