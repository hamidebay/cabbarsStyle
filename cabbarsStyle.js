const marke = "bmw";
const color = "black";
const year = 2020;
const customer_old = 1;
const message_Negativ = "üzgünüm sizi kabul edemem";
const message_Positive = "tamir edilecek";

// cabbarsStyle

if (customer_old > 5) {
  console.log(message_Positive);
} else if (marke == "bmw" && color == "red" && year >= 2010 && year <= 2019) {
  console.log(marke +"" + message_Positive);
} else if (marke == "bmw" && color == "black" && year == 2020) {
  console.log(marke + "" +message_Positive);
} else if (
  marke == "audi" &&
  (color == "red" || color == "black") &&
  ((year >= 2005 && year <= 2010) || (year >= 2014 && year <= 2020))
) {
  console.log(marke + ""+ message_Positive);
} else if (marke == "vw" && color == "black" && year >= 2001 && year <= 2018) {
  console.log(marke + "" + message_Positive);
} else {
  console.log(message_Negativ);
}
