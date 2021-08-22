let secretCode = 'asd';
let chars = [];
let timer;

function keySequence(e) {
  console.log(e.key);
  chars.push(e.key);
  console.log(chars.length);
  chars.splice(-secretCode.length - 1, chars.length - secretCode.length);
  const word = chars.join('');
  console.log(word);
  if (word === secretCode) {
    console.log('Yaaaaaaaaaa');
  }
  // console.log(e.key);
  // pressed.push(e.key);
  // pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // if (pressed.join('').includes(secretCode)) {
  //   console.log('DING DING!');
  //   cornify_add();
  // }
  // console.log(pressed);
}

window.addEventListener('keyup', keySequence);
