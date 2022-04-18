const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  if (
    document.getElementById("in1D").value == "" ||
    document.getElementById("in2D").value == ""
  ) {
    alert("Error, you need to set the diameters");
  } else {
    if (document.getElementById("in1A").value == "")
      document.getElementById("in1A").value = 1;
    if (document.getElementById("in2A").value == "")
      document.getElementById("in2A").value = 1;

    const r1 = Number(document.getElementById("in1D").value) / 2;
    const r2 = Number(document.getElementById("in2D").value) / 2;

    const area1 =
      Math.PI * r1 * r1 * Number(document.getElementById("in1A").value);

    const area2 =
      Math.PI * r2 * r2 * Number(document.getElementById("in2A").value);

    const price1 =
      Number(
        document.getElementById("in1C").value *
          Number(document.getElementById("in1A").value)
      ) / area1;

    const price2 =
      Number(
        document.getElementById("in2C").value *
          Number(document.getElementById("in2A").value)
      ) / area2;

    console.log(price1);
    console.log(price2);

    document.getElementById("tarea1").innerHTML = area1.toFixed(2);
    document.getElementById("tarea2").innerHTML = area2.toFixed(2);

    if (
      document.getElementById("in1C").value == "" ||
      document.getElementById("in1C").value == 0
    )
      document.getElementById("ppc1").innerHTML = "-";
    else
      document.getElementById("ppc1").innerHTML =
        Number(price1).toFixed(4) + " PLN";
    if (
      document.getElementById("in2C").value == "" ||
      document.getElementById("in2C").value == 0
    )
      document.getElementById("ppc2").innerHTML = "-";
    else
      document.getElementById("ppc2").innerHTML =
        Number(price2).toFixed(4) + " PLN";

    if (
      document.getElementById("in1C").value == "" ||
      document.getElementById("in2C").value == "" ||
      document.getElementById("in1C").value == 0 ||
      document.getElementById("in2C").value == 0
    ) {
      if (area1 > area2) {
        document.getElementById("pizza1").style.background = "#90EE90";
        document.getElementById("pizza2").style.background = "#FF6347";
      } else if (area1 < area2) {
        document.getElementById("pizza2").style.background = "#90EE90";
        document.getElementById("pizza1").style.background = "#FF6347";
      } else if (area1 == area2) {
        document.getElementById("pizza2").style.background = "#FFD700";
        document.getElementById("pizza1").style.background = "#FFD700";
      }
    } else {
      if (price1 < price2) {
        document.getElementById("pizza1").style.background = "#90EE90";
        document.getElementById("pizza2").style.background = "#FF6347";
      } else if (price1 > price2) {
        document.getElementById("pizza2").style.background = "#90EE90";
        document.getElementById("pizza1").style.background = "#FF6347";
      } else if (price1 == price2) {
        document.getElementById("pizza2").style.background = "#FFD700";
        document.getElementById("pizza1").style.background = "#FFD700";
      }
    }
  }
});
