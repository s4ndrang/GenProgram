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
        } else if (bType == "Corporate") {
            $(".corp").show();
        } else if (bType == "Hybrid") {
           $(".hyb").show();
        }
    });

    // function
    function calculRes() {
        let productType = $("input[name='pdtline']:checked").val();
        let unitPrice;
        let installationFeesMultiplier;
        if(productType == "Standard") {
            unitPrice = 7565;
            installationFeesMultiplier = 0.1;
        } else if(productType == "Premium") {
            unitPrice = 12345;
            installationFeesMultiplier = 0.13;
        } else if(productType == "Excelium") {
            unitPrice = 15400;
            installationFeesMultiplier = 0.16;
        }
    }
        // do calculations 
        let numApartment = $("#numApartment").val();
        let numUppLevel = $("#numUppLevel").val();

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
    })
})
 /*   function calculCorpHyb() {
        var numElev = Math.ceil(numOccupant*(numUppLevel + numBasement)/1000);
        var numColumn = Math.ceil(numUppLevel + numBasement)/20;
        var numElevPerColumn = Math.ceil(numElev / numColumn);
        var numElevCorpHyb = numElevPerColumn*numColumn;
    }