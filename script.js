// -- COUNTER COMPONENT --
const textareaEl = document.querySelector(".form__textarea");
const charCounterEl = document.querySelector(".counter");

const CHARS_LIMIT = 150;

const handleInput = () => {
  const charsTyped = textareaEl.value.length;

  charCounterEl.textContent = CHARS_LIMIT - charsTyped;
};

textareaEl.addEventListener("input", handleInput);
