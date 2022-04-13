var no = document.getElementById("si");
var si = document.getElementById("no");
let ilove = document.getElementById("ilove");

no.addEventListener("click", function () {
  ilove.style.display = "block";
  ilove.parentElement.style.backgroundColor = "#0f6c54";
});

si.addEventListener("mouseenter", function () {
  
  ilove.style.display = "none";
  ilove.parentElement.style.backgroundColor = "#212955";

  var aleatorio = Math.random() * (0.9999999 - 0.15 + 0.15) * 100;
  console.log(aleatorio);

  let aleatorio2 = Math.random() * 100;
  let a = Math.random();
  let b = Math.random();
  // console.log(aleatorio);
  // console.log(aleatorio2, "2");
  if (aleatorio > 90) {
    aleatorio = aleatorio - 10;
  } else if (aleatorio < 15) {
    aleatorio = aleatorio + 10;
  }
  if (aleatorio2 > 90) {
    aleatorio2 = aleatorio2 - 10;
  }
  if (a > b) {
    si.style.top = `${aleatorio}%`;
    si.style.right = `${aleatorio2}%`;
    // console.log("desde el if");
  } else {
    si.style.top = `${aleatorio}%`;
    si.style.left = `${aleatorio2}%`;
  }
});

si.addEventListener("click", function () {
  var aleatorio = Math.random() * (0.9999999 - 0.15 + 0.15) * 100;
  console.log(aleatorio);

  let aleatorio2 = Math.random() * 100;
  let a = Math.random();
  let b = Math.random();
  // console.log(aleatorio);
  // console.log(aleatorio2, "2");
  if (aleatorio > 90) {
    aleatorio = aleatorio - 10;
  } else if (aleatorio < 15) {
    aleatorio = aleatorio + 10;
  }
  if (aleatorio2 > 90) {
    aleatorio2 = aleatorio2 - 10;
  }
  if (a > b) {
    si.style.top = `${aleatorio}%`;
    si.style.right = `${aleatorio2}%`;
    // console.log("desde el if");
  } else {
    si.style.top = `${aleatorio}%`;
    si.style.left = `${aleatorio2}%`;
  }
});
