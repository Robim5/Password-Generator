//head... reset the page bc yes
const head = document.querySelector('.heading');

head.addEventListener('click', () => {
    if (confirm('Are you sure you want to reload the page?')){
        location.reload();
    } else {
        console.log("nothing happened");
    }
});

//start with generate

//lower
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
    /*
    Math.random(): 
    - This generates a random number between 0 (inclusive) and 1 (exclusive).
    Math.floor(Math.random()*26): 
    - This multiplies the random number by 26, which gives us a random number between 0 and 25. The Math.floor() function rounds down the result to the nearest integer, so we get a whole number between 0 and 25.
    +97: 
    - This adds 97 to the result. The reason for this is that the ASCII code for the lowercase letter 'a' is 97. By adding 97 to the random number, we shift the range of values to correspond to the ASCII codes for lowercase letters 'a' to 'z'.
    String.fromCharCode(...): 
    - This takes the resulting number and converts it to a string character using the fromCharCode() method. This method returns a string containing the character represented by the specified Unicode code point. 
    */
}
//upper
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26) +65);
    /*
    +65: 
    - This adds 65 to the result. The reason for this is that the ASCII code for the uppercase letter 'A' is 65. By adding 65 to the random number, we shift the range of values to correspond to the ASCII codes for uppercase letters 'A' to 'Z'.
    String.fromCharCode(...): 
    - This takes the resulting number and converts it to a string character using the fromCharCode() method. This method returns a string containing the character represented by the specified Unicode code point.*/
}
//number
function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random()*10) +48);

    /* 
    Math.floor(Math.random()*10): 
    - This multiplies the random number by 10, which gives us a random number between 0 and 9. The Math.floor() function rounds down the result to the nearest integer, so we get a whole number between 0 and 9.
    +48: 
    - This adds 48 to the result. The reason for this is that the ASCII code for the character '0' is 48. By adding 48 to the random number, we shift the range of values to correspond to the ASCII codes for the characters '0' to '9'.
    String.fromCharCode(...): 
    - This takes the resulting number and converts it to a string character using the fromCharCode() method. This method returns a string containing the character represented by the specified Unicode code point.
    +: 
    - The unary + operator is used to convert the resulting string character back to a number.*/
}
//symbol
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)];

    /*
    Math.floor(Math.random()*symbols.length): 
    - This multiplies the random number by the length of the symbols string, which gives us a random index into the string. The Math.floor() function rounds down the result to the nearest integer, so we get a whole number between 0 and symbols.length - 1.
    symbols[...]: 
    - This uses the random index to access a character in the symbols string. Since the index is random, the character selected will also be random. */
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

const generate = document.querySelector(".generate");
generate.addEventListener("click", () => {
    const length = +document.getElementById("length").value;
    const hasLower = document.getElementById("lower").checked;
    const hasUpper = document.getElementById("upper").checked;
    const hasNumber = document.getElementById("number").checked;
    const hasSymbol = document.getElementById("special").checked;
    const result = document.querySelector(".password");

    result.value = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

//function to generate the password
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const types = [];

    /*The if statements add the corresponding character type to the types array if the respective input parameter is true.  */
    if (lower) types.push('lower');
    // if lower is true, the string 'lower' is added to the types array.
    if (upper) types.push('upper');
    if (number) types.push('number');
    if (symbol) types.push('symbol');
    
    //The for loop iterates length times to generate the password.
    for (let i = 0; i < length; i += 1) {
        const type = types[Math.floor(Math.random() * types.length)];
        generatedPassword += randomFunc[type]();
    }

    return generatedPassword;
}

const buttonCopy = document.querySelector(".copy");
buttonCopy.addEventListener("click", (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById("PasswordResult");
    passwordInput.select();
    document.execCommand("copy");
});

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("PasswordResult").value = "";
});


//theme

const showbehindvar = document.querySelector(".changetheme");
const behind = document.querySelector(".behindcontainer");

showbehindvar.addEventListener("mouseover", (e) => {
    e.preventDefault();
    behind.style.display = "block";
});

showbehindvar.addEventListener("mouseout", (e) => {
    e.preventDefault();
    behind.style.display = "none";
});

const themeButton = document.querySelector('.changetheme');
const imgTheme = document.querySelector('#imgtheme');
let isGreenTheme = false;

// Add event listeners to buttons
const generateButtons = document.querySelectorAll('.generate');
generateButtons.forEach((el) => {
  el.addEventListener('mouseover', () => {
    if (isGreenTheme) {
      el.style.backgroundColor = '#09302b';
      el.style.borderColor = '#7ab37c';
      el.style.color = '#7ab37c';
    } else {
      el.style.backgroundColor = '#623f2b';
      el.style.borderColor = '#b76e2d';
      el.style.color = '#b76e2d';
    }
  });

  el.addEventListener('mouseout', () => {
    if (isGreenTheme) {
      el.style.backgroundColor = '#7ab37c';
      el.style.borderColor = '#09302b';
      el.style.color = '#09302b';
    } else {
      el.style.backgroundColor = '#b76e2d';
      el.style.borderColor = '#623f2b';
      el.style.color = '#623f2b';
    }
  });
});

const copied = document.querySelectorAll('.copy');
copied.forEach((el) => {
  el.addEventListener('mouseover', () => {
    if (isGreenTheme) {
      el.style.backgroundColor = '#f7f4d1';
      el.style.borderColor = '#062223';
      el.style.color = '#062223';
    } else {
      el.style.backgroundColor = '#555151';
      el.style.borderColor = '#1b1b1b';
      el.style.color = '#1b1b1b';
    }
  });

  el.addEventListener('mouseout', () => {
    if (isGreenTheme) {
      el.style.backgroundColor = '#062223';
      el.style.borderColor = '#f7f4d1';
      el.style.color = '#f7f4d1';
    } else {
      el.style.backgroundColor = '#1b1b1b';
      el.style.borderColor = '#555151';
      el.style.color = '#555151';
    }
  });
});

const cleared = document.querySelectorAll('.clear');
cleared.forEach((el) => {
  el.addEventListener('mouseover', () => {
    if (isGreenTheme) {
      el.style.backgroundColor = '#f7f4d1';
      el.style.borderColor = '#062223';
      el.style.color = '#062223';
    } else {
      el.style.backgroundColor = '#555151';
      el.style.borderColor = '#1b1b1b';
      el.style.color = '#1b1b1b';
    }
  });

  el.addEventListener('mouseout', () => {
    if (isGreenTheme) {
      el.style.backgroundColor = '#062223';
      el.style.borderColor = '#f7f4d1';
      el.style.color = '#f7f4d1';
    } else {
      el.style.backgroundColor = '#1b1b1b';
      el.style.borderColor = '#555151';
      el.style.color = '#555151';
    }
  });
});

themeButton.addEventListener('click', () => {
    if (!isGreenTheme) {
      // Update CSS styles to green theme
      document.body.style.backgroundColor = '#062223';
      document.querySelectorAll('.container').forEach((el) => {
        el.style.backgroundColor = '#4e977a';
      });
  
      generateButtons.forEach((el) => {
        el.style.backgroundColor = '#7ab37c';
        el.style.borderColor = '#09302b';
        el.style.color = '#09302b';
      });
  
      copied.forEach((el) => {
        el.style.backgroundColor = '#062223';
        el.style.borderColor = '#f7f4d1';
        el.style.color = '#f7f4d1';
      });
  
      cleared.forEach((el) => {
        el.style.backgroundColor = '#062223';
        el.style.borderColor = '#f7f4d1';
        el.style.color = '#f7f4d1';
      });
  
      const fundoimg = document.querySelectorAll('.changetheme');
      fundoimg.forEach((el) => {
        el.style.backgroundColor = '#4e977a';
      });
  
      imgTheme.src = 'chess.png';
  
      isGreenTheme = true;
    } else {
      // Update CSS styles to original theme
      document.body.style.backgroundColor = '#1b1b1b';
      document.querySelectorAll('.container').forEach((el) => {
        el.style.backgroundColor = '#9f9689';
      });
  
      generateButtons.forEach((el) => {
        el.style.backgroundColor = '#b76e2d';
        el.style.borderColor = '#623f2b';
        el.style.color = '#623f2b';
      });
  
      copied.forEach((el) => {
        el.style.backgroundColor = '#1b1b1b';
        el.style.borderColor = '#555151';
        el.style.color = '#555151';
      });
  
      cleared.forEach((el) => {
        el.style.backgroundColor = '#1b1b1b';
        el.style.borderColor = '#555151';
        el.style.color = '#555151';
      });
  
      const fundoimg = document.querySelectorAll('.changetheme');
      fundoimg.forEach((el) => {
        el.style.backgroundColor = '#b76e2d';
      });
  
      imgTheme.src = 'nature.png';
      
  
      isGreenTheme = false;
    }
});

const fundoimgs = document.querySelectorAll('.changetheme');

fundoimgs.forEach(fundoimg => {
    fundoimg.addEventListener('click', () => {
        fundoimg.classList.add('rotate');
        setTimeout(() => {
            fundoimg.classList.remove('rotate');
        }, 500);
    });
});