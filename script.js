const inputElement = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');
let textArr = [];
const clearInputElement = () => {
  inputElement.value = '';
}
let i;
function oneDigit(number){
  i = number;
  if(i<=3){
    while(i>0){
      textArr.push('I');
      i--;
    }}
    else if(i===4){
      textArr.push('IV')
    }
    else if(i>=5 && i<9){
      textArr.push('V');
      while(i%5 > 0){
        textArr.push('I')
        i--;
      }
    }
    else if(i === 9){
      textArr.push('IX')
    }
}

function twoDigit(number){
i = number;
  if(i<=3){
    while(i>0){
      textArr.push('X');
      i--;
    }}
    else if(i===4){
      textArr.push('XL')
    }
    else if(i>=5 && i<9){
      textArr.push('L');
      while(i%5 > 0){
        textArr.push('X')
        i--;
      }
    }
    else if(i === 9){
      textArr.push('XC')
    }
}
function threeDigit(number){
i = number;
  if(i<=3){
    while(i>0){
      textArr.push('C');
      i--;
    }}
    else if(i===4){
      textArr.push('CD')
    }
    else if(i>=5 && i<9){
      textArr.push('D');
      while(i%5 > 0){
        textArr.push('C')
        i--;
      }
    }
    else if(i === 9){
      textArr.push('CM')
    }
}
function fourDigit(number){
  i = number;
  while(i>0){
    textArr.push('M')
    i--;
  }
}    
const digitValue = number => {
  const numberArr = [...number];
  console.log(numberArr)
  switch (numberArr.length){
    case 1 : oneDigit(parseInt(numberArr[0]))
    break;
    case 2: twoDigit(parseInt(numberArr[0]));
    oneDigit(parseInt(numberArr[1]))
    break;
    case 3: 
    threeDigit(parseInt(numberArr[0]))
    twoDigit(parseInt(numberArr[1]))
    oneDigit(parseInt(numberArr[2]))
    break;
    case 4:
    fourDigit(parseInt(numberArr[0]))
    threeDigit(parseInt(numberArr[1]))
    twoDigit(parseInt(numberArr[2]))
    oneDigit(parseInt(numberArr[3]))
  }
  console.log(textArr.join(''))
  return textArr.join('')
}
convertBtn.addEventListener('click', () => {
  if (inputElement.value === '') {
    output.innerText = 'Please enter a valid number\n ❌';
    output.classList.add('shake');
    setTimeout(()=>{
        output.classList.remove('shake');
    },2000)
  } else if (inputElement.value < 1) {
    output.innerText = 'Please enter a number greater than or equal to 1\n ❌';
    output.classList.add('shake');
    setTimeout(()=>{
        output.classList.remove('shake');
    },2000)
  } else if (inputElement.value > 3999) {
    output.innerText = 'Please enter a number less than or equal to 3999';
    output.classList.add('shake');
    setTimeout(()=>{
        output.classList.remove('shake');
    },2000)
  } else {
    output.innerText = digitValue(inputElement.value);
    output.classList.add('zoom-in-out')
    output.innerText = digitValue(inputElement.value);
    setTimeout(()=>{
        output.classList.remove('zoom-in-out');
    },400)
  }

  clearInputElement(); 
  textArr = [];
})
document.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
  if (inputElement.value === '') {
    output.innerText = 'Please enter a valid number\n ❌';
    output.classList.add('shake');
    setTimeout(()=>{
        output.classList.remove('shake');
    },2000)
  } else if (inputElement.value < 1) {
    output.innerText = 'Please enter a number greater than or equal to 1\n ❌';
    output.classList.add('shake');
    setTimeout(()=>{
        output.classList.remove('shake')
    },2000)
  } else if (inputElement.value > 3999) {
    output.innerText = 'Please enter a number less than or equal to 3999\n ❌';
    output.classList.add('shake');
    setTimeout(()=>{
        output.classList.remove('shake')
    },2000)
  } else {
    output.classList.add('zoom-in-out')
    output.innerText = digitValue(inputElement.value);
    setTimeout(()=>{
        output.classList.remove('zoom-in-out');
    },400)
  }

  clearInputElement(); 
  textArr = [];
}}) 