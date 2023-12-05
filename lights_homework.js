// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

document.addEventListener("DOMContentLoaded", () => {
  // * stop light
  const stopLightRef = document.querySelector(".light.stop");
  const stopButtonRef = document.getElementById("stop");

  stopButtonRef.addEventListener("click", (e) => {
    function stopLight() {
      goLightRef.classList.remove("on");
      cautionLightRef.classList.remove("on");
    }

    stopLightRef.classList.toggle("on") ? stopLight() : "";
  });

  function hoverStop() {
    stopLightRef.addEventListener("mouseover", () => {
      stopLightRef.classList.toggle("on");
    });

    stopLightRef.addEventListener("mouseout", () => {
      stopLightRef.classList.remove("on");
    });
  }
  hoverStop();

  // * caution light
  const cautionLightRef = document.querySelector(".light.caution");
  const cautionButtonRef = document.getElementById("caution");

  cautionButtonRef.addEventListener("click", () => {
    function cautionLight() {
      stopLightRef.classList.remove("on");
      goLightRef.classList.remove("on");
    }

    cautionLightRef.classList.toggle("on") ? cautionLight() : "";
  });

  function hoverCaution() {
    cautionLightRef.addEventListener("mouseover", () => {
      cautionLightRef.classList.toggle("on");
    });

    cautionLightRef.addEventListener("mouseout", () => {
      cautionLightRef.classList.remove("on");
    });
  }
  hoverCaution();

  // * go light
  const goLightRef = document.querySelector(".light.go");
  const goButtonRef = document.getElementById("go");

  goButtonRef.addEventListener("click", () => {
    function goLight() {
      cautionLightRef.classList.remove("on");
      stopLightRef.classList.remove("on");
    }

    goLightRef.classList.toggle("on") ? goLight() : "";
  });

  function hoverGo() {
    goLightRef.addEventListener("mouseover", () => {
      goLightRef.classList.toggle("on");
    });

    goLightRef.addEventListener("mouseout", () => {
      goLightRef.classList.remove("on");
    });
  }
  hoverGo();

  // * switches lights on automatically in a random sequence - random because I don't know how to make it not random...
  const timerStartRef = document.getElementById("timerButtonStart");

  timerStartRef.addEventListener("click", () => {
    function clickStop() {
      document.querySelector("#stop").click();
    }

    setInterval(clickStop, 1000);

    function clickCaution() {
      document.querySelector("#caution").click();
    }

    setInterval(clickCaution, 2000);

    function clickGo() {
      document.querySelector("#go").click();
    }

    setInterval(clickGo, 3000);
  });
});
