import './style.css';

const pet = document.querySelector('#pet');
const message = document.querySelector('#message');
const messageText = document.querySelector('#messageText');
const clock = document.querySelector('#clock');

const encouragements = [
  '今天也要从容解决 bug！',
  '喝口水，再继续闪闪发光吧。',
  '这个报错，我们一起慢慢看。',
  '已经做得很好啦，继续冲！',
  '提交之前，记得给自己一个赞。'
];
let index = 0;

function cheer() {
  index = (index + 1) % encouragements.length;
  messageText.textContent = encouragements[index];
  pet.classList.remove('cheering');
  void pet.offsetWidth;
  pet.classList.add('cheering');
}

function updateClock() {
  clock.textContent = new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
}

pet.addEventListener('click', cheer);
message.addEventListener('click', cheer);
updateClock();
setInterval(updateClock, 30000);
