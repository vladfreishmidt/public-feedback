// -- GLOBAL -- //
const MAX_CHARS = 150;

const textareaEl = document.querySelector(".form__textarea");
const charCounterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");
const feedbackListEl = document.querySelector(".feedbacks");
const submitBtnEl = document.querySelector(".submit-btn");

// -- COUNTER COMPONENT -- //

const handleInput = () => {
  const charsTyped = textareaEl.value.length;

  charCounterEl.textContent = MAX_CHARS - charsTyped;
};

textareaEl.addEventListener("input", handleInput);

// -- FORM COMPONENT -- //
const autoToggleClassName = (targetEl, className, duration) => {
  targetEl.classList.add(className);

  setTimeout(() => targetEl.classList.remove(className), duration);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const text = textareaEl.value;

  // validation
  const hashtag = text.split(" ").find((word) => word.startsWith("#"));

  if (hashtag && text.length >= 5) {
    autoToggleClassName(formEl, "form--valid", 2000);
  } else {
    autoToggleClassName(formEl, "form--invalid", 2000);

    textareaEl.focus();

    return;
  }

  // extract info from the textarea value

  const company = hashtag.substring(1);
  const badgeLetter = company.substring(0, 1).toUpperCase();
  const upvoteCount = 0;
  const daysAgo = 0;

  // new feedback item HTML
  const feedbackItemHTML = `
    <li class="feedback">
      <button class="upvote">
          <i class="fa-solid fa-caret-up upvote__icon"></i>
          <span class="upvote__count">${upvoteCount}</span>
      </button>
      <section class="feedback__badge">
          <p class="feedback__letter">${badgeLetter}</p>
      </section>
      <div class="feedback__content">
          <p class="feedback__company">${company}</p>
          <p class="feedback__text">${text}</p>
      </div>
      <p class="feedback__date">${daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
    </li>
  `;

  // insert new feedback item
  feedbackListEl.insertAdjacentHTML("beforeend", feedbackItemHTML);

  // reset UI state
  textareaEl.value = "";
  charCounterEl.textContent = MAX_CHARS;
  submitBtnEl.blur();
};

formEl.addEventListener("submit", handleSubmit);
