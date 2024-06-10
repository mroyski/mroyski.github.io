document.addEventListener(
  'DOMContentLoaded',
  () => {
    const workHistoryCards = Array.from(
      document.querySelectorAll('.work-history-card')
    );
    workHistoryCards
      .slice(2, workHistoryCards.length)
      .forEach((c) => (c.hidden = true));

    const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },
  false
);

let historyDisplayIndex = 1;
const workHistoryButtons = document.querySelector('#work-history-buttons');

const workHistoryButtonMore = document.querySelector(
  '#work-history-button-more'
);
workHistoryButtonMore.addEventListener('click', () => {
  const workHistoryCards = Array.from(
    document.querySelectorAll('.work-history-card')
  );

  if (historyDisplayIndex >= workHistoryCards.length - 1) return;

  historyDisplayIndex++;
  workHistoryCards[historyDisplayIndex].hidden = false;

  if (historyDisplayIndex === workHistoryCards.length - 1) {
    const theEnd = document.querySelector('#work-history-end');
    theEnd.hidden = false;
  }

  workHistoryButtons.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
});

const workHistoryButtonLess = document.querySelector(
  '#work-history-button-less'
);
workHistoryButtonLess.addEventListener('click', () => {
  const workHistoryCards = Array.from(
    document.querySelectorAll('.work-history-card')
  );

  if (historyDisplayIndex <= -1) return;

  workHistoryCards[historyDisplayIndex].hidden = true;
  historyDisplayIndex--;

  if (historyDisplayIndex < workHistoryCards.length - 1) {
    const theEnd = document.querySelector('#work-history-end');
    theEnd.hidden = true;
  }
});
