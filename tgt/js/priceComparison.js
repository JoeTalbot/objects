function init(tgt, amzn, wmt) {
    var matchPrice;
    if (amzn < wmt) {
        if (tgt > amzn) {
            matchPrice = {
                price: amzn,
                who: "amzn"
            };
        }
    } else if (tgt > wmt) {
        matchPrice = {
            price: wmt,
            who: "wmt"
        };
    }
    console.log(matchPrice);

    var tgtPrice = document.getElementById("tgt");
    document.getElementById("amzn").innerHTML = "$" + amzn.toString();
    document.getElementById("wmt").innerHTML = "$" + wmt.toString();

    if (matchPrice === undefined) {
        tgtPrice.innerHTML = "$" + tgt.toString();
        tgtPrice.style.color = 'green';
    } else {
        var discount = Math.floor((tgt - matchPrice.price) / tgt * 100);
        if (discount < 30) {
            // Do price matching
            tgtPrice.innerHTML = "$" + tgt.toString() + "<p>touch to apply price match</p>";
            tgtPrice.onclick = function() {
                this.innerHTML = "$" + matchPrice.price.toString() + "<p>price match discount: " + discount.toString() + "%</p>";
                this.style.color = 'green';
                console.log("Discount applied");
            };
        } else {
           // Don't discount!
            tgtPrice.innerHTML = "$" + tgt.toString();
            document.getElementById(matchPrice.who).style.color = '#4CD964';
        }
    }
}
