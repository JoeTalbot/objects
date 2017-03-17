function init(tgt, amzn, wmt) {
    var matchPrice;
    if (amzn < wmt) {
        if (tgt > amzn) {
            matchPrice = amzn;
        }
    } else if (tgt > wmt) {
        matchPrice = wmt;
    }
    console.log(matchPrice);
    var tgtPrice = document.getElementById("tgt");
    if (matchPrice === undefined) {
        tgtPrice.innerHTML = "$" + tgt.toString();
        tgtPrice.style.color = 'green';
    } else {
        tgtPrice.innerHTML = "$" + tgt.toString() + "<p>touch to apply price match</p>";
        tgtPrice.onclick = function() {
            var discount = Math.floor((tgt - matchPrice) / tgt * 100);
            console.log(discount);
            this.innerHTML = "$" + matchPrice.toString() + "<p>price match discount: " + discount.toString() + "%</p>";
            this.style.color = 'green';
            console.log("Discount applied");
        };
    }
    document.getElementById("amzn").innerHTML = "$" + amzn.toString();
    document.getElementById("wmt").innerHTML = "$" + wmt.toString();
}
