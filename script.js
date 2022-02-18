let isCaps = true;
let altKeyPressed = false;
let ctrlKeyPressed = false;
let shiftOn = false;
let russian = false;

function createDiv() {
  return document.createElement('div');
}

class CreateKeyboard {
  constructor() {
    this.keyboard = createDiv();
    this.keyboard.setAttribute('id', 'keyboard');
    this.specialKeys = this.constructor.createKeys('special');
    this.shiftOnKeys = this.constructor.createKeys('shiftOn');
    this.shiftOffKeys = this.constructor.createKeys('shiftOff');
    this.arrowKeys = this.constructor.createKeys('arrow');
    this.englishKeys = this.constructor.createKeys('eng');
    this.russianKeys = this.constructor.createKeys('rus');
    document.getElementsByTagName('body')[0].appendChild(this.keyboard);
    this.createKeyboardTop();
    this.createKeyboardTopHalf();
    this.createKeyboardMid();
    this.createKeyboardBotHalf();
    this.createKeyboardBot();
  }

  createKeyboardTop() {
    const topKeys = this.constructor.createKeys('top');
    const keyboardTop = createDiv();
    this.keyboard.appendChild(keyboardTop);
    keyboardTop.setAttribute('id', 'keyboard-top');
    for (let i = 0; i < topKeys.length; i += 1) {
      const button = document.createElement('button');
      if (this.specialKeys.includes(topKeys[i])) {
        button.setAttribute('id', topKeys[i].toLowerCase());
        button.setAttribute('class', 'special');
      }
      button.textContent = topKeys[i];
      keyboardTop.appendChild(button);
    }
  }

  createKeyboardTopHalf() {
    const topHalfKeys = this.constructor.createKeys('topHalf');
    const keyboardTopHalf = createDiv();
    this.keyboard.appendChild(keyboardTopHalf);
    keyboardTopHalf.setAttribute('id', 'keyboard-top-half');
    for (let i = 0; i < topHalfKeys.length; i += 1) {
      const button = document.createElement('button');
      if (this.specialKeys.includes(topHalfKeys[i])) {
        button.setAttribute('id', topHalfKeys[i].toLowerCase());
        button.setAttribute('class', 'special');
      }
      button.textContent = topHalfKeys[i];
      keyboardTopHalf.appendChild(button);
    }
  }

  createKeyboardMid() {
    const midKeys = this.constructor.createKeys('mid');
    const keyboardMid = createDiv();
    this.keyboard.appendChild(keyboardMid);
    keyboardMid.setAttribute('id', 'keyboard-mid');
    for (let i = 0; i < midKeys.length; i += 1) {
      const button = document.createElement('button');
      if (this.specialKeys.includes(midKeys[i])) {
        if (midKeys[i] === 'Caps') {
          button.setAttribute('id', 'caps');
        } else {
          button.setAttribute('id', midKeys[i].toLowerCase());
        }
        button.setAttribute('class', 'special');
      }
      button.textContent = midKeys[i];
      keyboardMid.appendChild(button);
    }
  }

  createKeyboardBotHalf() {
    const botHalfKeys = this.constructor.createKeys('botHalf');
    const keyboardBotHalf = createDiv();
    this.keyboard.appendChild(keyboardBotHalf);
    keyboardBotHalf.setAttribute('id', 'keyboard-bot-half');
    let idExists = false;
    for (let i = 0; i < botHalfKeys.length; i += 1) {
      const button = document.createElement('button');
      if (this.specialKeys.includes(botHalfKeys[i])) {
        if (this.arrowKeys.includes(botHalfKeys[i])) {
          button.setAttribute('class', 'arrow');
        } else if (botHalfKeys[i] === 'Shift') {
          if (!idExists) {
            idExists = true;
            button.setAttribute('id', botHalfKeys[i].toLowerCase());
          } else {
            button.setAttribute('id', 'small-shift');
          }
        } else {
          button.setAttribute('id', botHalfKeys[i].toLowerCase());
        }
        button.setAttribute('class', 'special');
      }
      button.textContent = botHalfKeys[i];
      keyboardBotHalf.appendChild(button);
    }
  }

  createKeyboardBot() {
    const botKeys = this.constructor.createKeys('bot');
    const keyboardBot = createDiv();
    this.keyboard.appendChild(keyboardBot);
    keyboardBot.setAttribute('id', 'keyboard-bot');
    let ctrId = false;
    let altId = false;
    for (let i = 0; i < botKeys.length; i += 1) {
      const button = document.createElement('button');
      if (this.specialKeys.includes(botKeys[i])) {
        if (botKeys[i] === ' ') {
          button.setAttribute('id', 'space');
        } else if (botKeys[i] === 'Ctrl') {
          if (!ctrId) {
            ctrId = true;
            button.setAttribute('id', botKeys[i].toLowerCase());
          } else {
            button.setAttribute('id', 'right-ctrl');
          }
        } else if (botKeys[i] === 'Alt') {
          if (!altId) {
            altId = true;
            button.setAttribute('id', botKeys[i].toLowerCase());
          } else {
            button.setAttribute('id', 'right-alt');
          }
        } else {
          button.setAttribute('id', botKeys[i].toLowerCase());
        }
        button.setAttribute('class', 'special');
        if (this.arrowKeys.includes(botKeys[i])) {
          button.setAttribute('class', 'arrow');
        }
      }
      button.textContent = botKeys[i];
      keyboardBot.appendChild(button);
    }
  }

  static createKeys(keytype) {
    switch (keytype) {
      case 'top':
        return ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
      case 'topHalf':
        return ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
      case 'mid':
        return ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
      case 'botHalf':
        return ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠕', 'Shift'];
      case 'bot':
        return ['Fn', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', 'Ctrl', '🠔', '🠗', '🠖'];
      case 'special':
        return ['Backspace', 'Tab', 'Del', 'Caps', 'CapsLock', 'Enter', 'Shift', 'Fn', 'Ctrl', '⊞', 'ALT', ' ', 'Alt', '🠕', '🠔', '🠗', '🠖'];
      case 'arrow':
        return ['🠕', '🠔', '🠗', '🠖'];
      case 'shiftOn':
        return ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?', '|'];
      case 'shiftOff':
        return ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/', '\\'];
      case 'eng':
        return ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
          'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
          'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
          'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠕', 'Shift',
          'Fn', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', 'Ctrl', '🠔', '🠗', '🠖'];
      case 'rus':
        return ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
          'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
          'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
          'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '🠕', 'Shift',
          'Fn', 'Ctrl', '⊞', 'Alt', ' ', 'Alt', 'Ctrl', '🠔', '🠗', '🠖'];
      default:
        return null;
    }
  }
}

const body = document.getElementsByTagName('body')[0];
const textContent = createDiv();
body.appendChild(textContent);

const createInput = document.createElement('textarea');
createInput.setAttribute('id', 'main-text');
createInput.setAttribute('tabindex', '-1');
const div = document.getElementsByTagName('div')[0];
div.appendChild(createInput);

const keyboard = new CreateKeyboard();
const textArea = document.getElementById('main-text');
const buttons = document.getElementsByTagName('button');

const paragraph = document.createElement('p');
const text = document.createTextNode('Press Alt and Ctrl to switch between languages');
paragraph.appendChild(text);
body.appendChild(paragraph);

const paragraph2 = document.createElement('p');
paragraph2.setAttribute('id', 'system');
const text2 = document.createTextNode('OS Microsoft Windows');
paragraph2.appendChild(text2);
body.appendChild(paragraph2);

function capsLock(caps) {
  if (caps) {
    isCaps = false;
    for (let i = 0; i < buttons.length; i += 1) {
      if (!keyboard.specialKeys.includes(buttons[i].textContent)) {
        buttons[i].textContent = buttons[i].textContent.toUpperCase();
      }
    }
  } else {
    isCaps = true;
    for (let i = 0; i < buttons.length; i += 1) {
      if (!keyboard.specialKeys.includes(buttons[i].textContent)) {
        buttons[i].textContent = buttons[i].textContent.toLowerCase();
      }
    }
  }
}

function shift() {
  let index = 0;
  if (russian) {
    index += 1;
  }
  if (!shiftOn) {
    shiftOn = true;
    for (let i = 0; i < buttons.length; i += 1) {
      if (keyboard.shiftOffKeys.includes(buttons[i].textContent)) {
        buttons[i].textContent = keyboard.shiftOnKeys[index];
        index += 1;
      }
    }
    buttons[27].textContent = '/';
    buttons[51].textContent = ',';
  } else {
    shiftOn = false;
    for (let i = 0; i < buttons.length; i += 1) {
      if (keyboard.shiftOnKeys.includes(buttons[i].textContent)) {
        buttons[i].textContent = keyboard.shiftOffKeys[index];
        index += 1;
      }
    }
    buttons[27].textContent = '\\';
    buttons[51].textContent = '.';
  }
}

function keyUp(event) {
  if (document.activeElement.textContent !== textArea.textContent) {
    let eventKey = event.key;
    if (eventKey === undefined) {
      eventKey = this.textContent;
    }
    if (eventKey === 'Shift') {
      document.getElementById('shift').style.backgroundColor = '#aaaaaa';
      document.getElementById('shift').style.borderRadius = '0%';
      document.getElementById('small-shift').style.backgroundColor = '#aaaaaa';
      document.getElementById('small-shift').style.borderRadius = '0%';
      capsLock(isCaps);
      shift();
    } else if (eventKey === 'Control' || eventKey === 'Ctrl') {
      document.getElementById('ctrl').style.backgroundColor = '#aaaaaa';
      document.getElementById('ctrl').style.borderRadius = '0%';
      document.getElementById('right-ctrl').style.backgroundColor = '#aaaaaa';
      document.getElementById('right-ctrl').style.borderRadius = '0%';
      ctrlKeyPressed = false;
    } else if (eventKey === 'Alt') {
      document.getElementById('alt').style.backgroundColor = '#aaaaaa';
      document.getElementById('alt').style.borderRadius = '0%';
      document.getElementById('right-alt').style.backgroundColor = '#aaaaaa';
      document.getElementById('right-alt').style.borderRadius = '0%';
      altKeyPressed = false;
    }
  }
}

function changeLang() {
  let index = 0;
  if (!russian) {
    russian = true;
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].textContent = keyboard.russianKeys[index];
      index += 1;
    }
  } else {
    russian = false;
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].textContent = keyboard.englishKeys[index];
      index += 1;
    }
  }
}

function checkIfSpecialKey(event) {
  if (event === 'Tab') {
    textArea.value += '    ';
  } else if (event === 'CapsLock' || event === 'Caps') {
    capsLock(isCaps);
    const caps = document.getElementById('caps');
    if (isCaps) {
      caps.style.backgroundColor = '#aaaaaa';
      caps.style.borderRadius = '0%';
    } else {
      caps.style.backgroundColor = '#1c567c';
      caps.style.borderRadius = '25%';
      caps.style.transition = '0.3s';
    }
  } else if (event === 'Enter') {
    textArea.value += '\r\n';
    document.activeElement.blur();
  } else if (event === 'Shift') {
    document.getElementById('shift').style.backgroundColor = '#1c567c';
    document.getElementById('shift').style.borderRadius = '25%';
    document.getElementById('small-shift').style.backgroundColor = '#1c567c';
    document.getElementById('small-shift').style.borderRadius = '25%';
    capsLock(isCaps);
    shift();
  } else if (event === 'Control' || event === 'Ctrl') {
    document.getElementById('ctrl').style.backgroundColor = '#1c567c';
    document.getElementById('ctrl').style.borderRadius = '25%';
    document.getElementById('right-ctrl').style.backgroundColor = '#1c567c';
    document.getElementById('right-ctrl').style.borderRadius = '25%';
    ctrlKeyPressed = true;
    if (altKeyPressed) {
      changeLang();
    }
  } else if (event === 'Alt') {
    document.getElementById('alt').style.backgroundColor = '#1c567c';
    document.getElementById('alt').style.borderRadius = '25%';
    document.getElementById('right-alt').style.backgroundColor = '#1c567c';
    document.getElementById('right-alt').style.borderRadius = '25%';
    altKeyPressed = true;
    if (ctrlKeyPressed) {
      changeLang();
    }
  } else if (event === ' ') {
    textArea.value += ' ';
  } else if (event === 'Delete' || event === 'Del') {
    textArea.value = textArea.value.slice(0, -1);
  }
}

function checkLanguage(event) {
  if (!keyboard.specialKeys.includes(event) && event !== 'Control' && event !== 'Delete') {
    if (isCaps && !shiftOn) {
      if (russian) {
        for (let i = 0; i < keyboard.englishKeys.length; i += 1) {
          if (keyboard.englishKeys[i] === event) {
            textArea.value += keyboard.russianKeys[i];
          }
        }
      } else {
        textArea.value += event;
      }
    } else if (russian) {
      for (let i = 0; i < keyboard.englishKeys.length; i += 1) {
        if (keyboard.englishKeys[i] === event.toLowerCase()) {
          textArea.value += keyboard.russianKeys[i].toUpperCase();
        } else if (keyboard.shiftOnKeys[i] === event) {
          switch (event) {
            case '~':
              textArea.value += 'Ё';
              break;
            case '{':
              textArea.value += 'Х';
              break;
            case '}':
              textArea.value += 'Ъ';
              break;
            case '|':
              textArea.value += '/';
              break;
            case ':':
              textArea.value += 'Ж';
              break;
            case '"':
              textArea.value += 'Э';
              break;
            case '<':
              textArea.value += 'Б';
              break;
            case '>':
              textArea.value += 'Ю';
              break;
            case '?':
              textArea.value += ',';
              break;
            default:
              textArea.value += event;
          }
        }
      }
    } else {
      textArea.value += event.toUpperCase();
    }
  }
}

function keyPressed(event) {
  document.activeElement.blur();
  if (document.activeElement.textContent !== textArea.textContent) {
    let eventKey = event.key;
    if (eventKey === undefined) {
      eventKey = this.textContent;
    }
    if (keyboard.arrowKeys.includes(eventKey) || eventKey.slice(0, 5) === 'Arrow') {
      switch (event.which) {
        case 37:
          textArea.value += '🠔';
          break;
        case 38:
          textArea.value += '🠕';
          break;
        case 39:
          textArea.value += '🠖';
          break;
        case 40:
          textArea.value += '🠗';
          break;
        default:
          textArea.value += eventKey;
      }
    } else if (eventKey === 'Backspace') {
      textArea.value = textArea.value.slice(0, -1);
    } else {
      checkLanguage(eventKey);
    }
    if (!event.repeat) {
      checkIfSpecialKey(eventKey);
    }
  } else if (!event.repeat) {
    let eventKey = event.key;
    if (eventKey === undefined) {
      eventKey = this.textContent;
    }
    checkIfSpecialKey(eventKey);
  }
}

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyUp);

for (let i = 0; i < buttons.length; i += 1) {
  if (!keyboard.specialKeys.includes(buttons[i].textContent)) {
    buttons[i].addEventListener('click', keyPressed);
  } else {
    buttons[i].addEventListener('mousedown', keyPressed);
    switch (buttons[i].textContent) {
      case 'Shift':
        buttons[i].addEventListener('mouseup', keyUp);
        break;
      case 'Ctrl':
        buttons[i].addEventListener('mouseup', keyUp);
        break;
      case 'Alt':
        buttons[i].addEventListener('mouseup', keyUp);
        break;
      default:
    }
  }
}
