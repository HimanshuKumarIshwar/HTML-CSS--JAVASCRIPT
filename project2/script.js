  const textareaE1 = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");



updateCounter();

  textareaE1.addEventListener("keyup", () => {
    updateCounter()
  })

  function updateCounter(){
    totalCounterEl.innerText = textareaE1.value.length;
    




    remainingCounterEl.innerText = textareaE1.getAttribute("maxLength")- textareaE1.value.length;
  }