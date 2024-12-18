'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  let y = e.clientY - wallRect.top - spiderRect.height / 2;
  let x = e.clientX - wallRect.left - spiderRect.width / 2;

  y = Math.max(
    spiderRect.height / 2,
    Math.min(y, wallRect.height - spiderRect.height / 2),
  );

  x = Math.max(
    spiderRect.width / 2,
    Math.min(x, wallRect.width - spiderRect.width / 2),
  );

  spider.style.top = `${y - spiderRect.height / 2}px`;
  spider.style.left = `${x - spiderRect.width / 2}px`;
});
