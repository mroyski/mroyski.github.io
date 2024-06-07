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
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
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
});
