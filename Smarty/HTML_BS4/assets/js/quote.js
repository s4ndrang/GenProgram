// 0. Building Type
$(document).ready(function() { 
    $(".all").hide();
    // Building type event listener
    $("#bdgType").change(function() {
        $(".all").hide();
        let bType = $("#bdgType").find(':selected').text();
        if (bType == "Residential") {
            $(".res").show();
            calculRes();
        } else if (bType == "Commercial") {
            $(".comm").show();
            calculComm();
        } else if (bType == "Corporate") {
            $(".corp").show();
            calculCorpHyb();
        } else if (bType == "Hybrid") {
            $(".hyb").show();
            calculCorpHyb();
        }
    });
// RESIDENTIAL
    // function
        let productType = $("input[name='pdtline']:checked").val();
        let unitPrice;
        let installationFeesMultiplier;

            function calculRes() {
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

                let numElevNeeded = Math.ceil(numApartment/numUppLevel/6)*Math.ceil(numUppLevel/20);
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
                let numCage = $("#numCage").val();
                    parseInt(numCage);
                
                numElevNeeded = numCage;
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
            // CORPORATE
            function calculCorpHyb() {
                
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
                let numOccupant = $("#numOccupant").val();
                    parseInt(numOccupant);
                let numUppLevel = $("#numUppLevel").val();
                    parseInt(numUppLevel);
                let numBasement = $("#numBasement").val();
                    parseInt(numBasement);

                let numElev = Math.ceil[numOccupant*(numUppLevel + numBasement)/1000];
                let numColumn = Math.ceil[(numUppLevel + numBasement)/20];
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
})