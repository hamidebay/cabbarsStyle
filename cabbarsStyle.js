const marke = "vw";
const color = "black";
const year = 2017;
const customer_old = 1;

// cabbarsStyle 

if (customer_old > 5) { console.log("Araban tamir edilecek"); }
else if ((marke == "bmw") && (color == "red") && ((year >= 2010) && (year <= 2019))) { console.log(marke + " tamir edilecek"); }
else if ((marke == "audi") && ((color == "red") || (color == "black")) && (((year >= 2005) && (year <= 2010)) || ((year >= 2014) && (year <= 2020)))) { console.log(marke + " tamir edilecek"); }
else if ((marke == "vw") && (color == "black") && ((year >= 2001) && (year <= 2018))) { console.log(marke + " tamir edilecek"); }
else { console.log("üzgünüm sizi kabul edemem"); }
