window.onload = function () {
  const moods = {
    happy: "(*^‿^*)",
    sad: "(✖╭╮✖)",
    angry: "(ಠ_ಠ)",
    confused: "(。_。)",
  };
  const faceElement = document.querySelector("#face");

  document.querySelector("#happyBtn").addEventListener("click", function () {
    store.dispatch({ type: "HAPPY" });
    const currentFace = store.getState().mood;
    faceElement.innerText = moods[currentFace];
  });

  document.querySelector("#sadBtn").addEventListener("click", function () {
    store.dispatch({ type: "SAD" });
    const currentFace = store.getState().mood;
    faceElement.innerText = moods[currentFace];
  });

  document.querySelector("#angryBtn").addEventListener("click", function () {
    store.dispatch({ type: "ANGRY" });
    const currentFace = store.getState().mood;
    faceElement.innerText = moods[currentFace];
  });

  document.querySelector("#confusedBtn").addEventListener("click", function () {
    store.dispatch({ type: "CONFUSED" });
    const currentFace = store.getState().mood;
    faceElement.innerText = moods[currentFace];
  });
};
