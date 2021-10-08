let selectElementsStartingWithA = (array) => {
    let elems = [];
    for (let elem of array) {
        if (elem.split("")[0] == "a") {
            elems.push(elem);
        }
    }

    return elems;
}

let selectElementsStartingWithVowel = (array) => {
    let elems = [];
    for (let elem of array) {
        if (elem.split("")[0] == "a" || elem.split("")[0] == "e" || elem.split("")[0] == "i" || elem.split("")[0] == "o" || elem.split("")[0] == "u" || elem.split("")[0] == "y" || elem.split("")[0] == "w") {
            elems.push(elem);
        }
    }

    return elems;
}

let removeNullElements = (array) => {
    let elems = [];
    for (let elem of array) {
        if (elem != null) {
            elems.push(elem);
        }
    }

    return elems;
}

let removeNullAndFalseElements = (array) => {
    let elems = [];
    array = array.join(",");
    array = array.split(",");
    for (let elem of array) {
        if (elem != null && elem != "false" && elem != "") {
            if (elem == "0") {
                elems.push(0);
            } else {
                elems.push(elem);
            }
        }
    }

    return elems;
}

let reverseWordsInArray = (array) => {
    let elems = [];
    for (let elem of array) {
        splitted = elem.split("");
        reversed = splitted.reverse();

        elems.push(reversed.join(""));
    }

    return elems;
}

let everyPossiblePair = (array) => {
    let elems = [];
    array = array.sort();
    function pairs(arr) {
        var res = [],
            l = arr.length;
        for(var i=0; i<l; ++i)
            for(var j=i+1; j<l; ++j)
                res.push([arr[i], arr[j]]);
        return res;
    }
    pairs(array).forEach(function(pair){
        elems.push(pair);
    });
    return elems;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.split("").slice(0, Math.ceil(string.length / 2)).join("");
}

let makeNegative = (number) => {
    number = number.toString();
    if (number.startsWith("-")) {
        number = number;
    } else {
        number = "-" + number;
    }
    number = parseInt(number)
    return number;
}

let numberOfPalindromes = (array) => {
    const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');
    let isPalindrome = (str) => {
        const cleanStr = clean(str);
        const charArr = cleanStr.split('');

        for (let c of charArr) {
            if (c != charArr.pop()) {
                return false;
            }
        }

        return true;
    }

    let numOfPalindromes = 0;

    for (let elem of array) {
        if (isPalindrome(elem)) {
            numOfPalindromes++;
        }
    }

    return numOfPalindromes;
}

let shortestWord = (array) => {
    return(
        array.reduce((a, b) => a.length <= b.length ? a : b)
    )
}

let longestWord = (array) => {
    return(
        array.reduce((a, b) => a.length >= b.length ? a : b)
    )
}

let sumNumbers = (array) => {
    let sum = 0;
    for (let elem of array) {
        sum += elem;
    }
    return sum;
}

let repeatElements = (array) => {
    let newArray = [];

    for (let a = 0; a < array.length; a++) {
        newArray.push(array[a]);
    }

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;

    return avg;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArray = [];
    
    for (let elem of array) {
        if (elem < 6) {
            newArray.push(elem);
        } else {
            break;
        }
    }

    return newArray;
}

let convertArrayToObject = (array) => {
    let newArray = [];

    for (let i = 0; i < array.length + 1; i++) {
        newArray.push(array.splice(0, 2))
    }

    let object = Object.fromEntries(new Map(newArray));
    return object;
}

let getAllLetters = (array) => {
    let letters = [];
    for (let elem of array) {
        for (var i = 0; i < elem.length; i++) {
            letters.push(elem.charAt(i));
        }
    }

    uniq = [...new Set(letters.sort())];
    return uniq;
}

let swapKeysAndValues = (object) => {
    let objectFlip = (obj) => {
        const ret = {};
        Object.keys(obj).forEach(key => {
          ret[obj[key]] = key;
        });
        return ret;
      }

      return objectFlip(object);
}

let sumKeysAndValues = (object) => {
    let res = 0;

    Object.keys(object).forEach(key => {
        res += parseInt(key);    
    })

    Object.values(object).forEach(value => {
        res += parseInt(value);
    })

    return res;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = date.getUTCDate().toString();
    let month = (date.getUTCMonth() + 1).toString();
    let year = date.getUTCFullYear().toString();

    if (day.length == 1) {
        day = "0" + day;
    }

    if (month.length == 1) {
        month = "0" + month;
    }
    
    return `${day}/${month}/${year}`;
}

let getDomainName = (string) => {
    return string.replace(".com", "").split("@")[1];
}

let titleize = (string) => {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    string = string.split(" ");
    string[0] = string[0].capitalize();

    string.forEach((element, index) => {
        if (element.toLowerCase() === "the") {
            string[index + 1] = string[index + 1].capitalize();
        }
        else if (element.endsWith(".")) {
            string[index + 1] = string[index + 1 ].capitalize();
        }
    })

    string = string.join(" ");
    return string;
}

let checkForSpecialCharacters = (string) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(string)) {
        return true;
    } else {
        return false;
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let factorialize = (n) => {
        let answer = 1;
        if (n == 0 || n == 1){
          return answer;
        }else{
          for(let i = n; i >= 1; i--){
            answer = answer * i;
          }
          return answer;
        }  
    }

    return factorialize(number);
}

let findAnagrams = (string) => {

    let generateAnagrams = (word) => {
        if (word.length < 2) {
            return [word];
        } else {
            let anagrams = [];
            let before, focus, after;
            let shortWord, subAnagrams, newEntry;
            for (let i = 0; i < word.length; i++) {
                before = word.slice(0, i);
                focus = word[i];
                after = word.slice(i + 1, word.length + 1);
                shortWord = before + after;
                subAnagrams = generateAnagrams(shortWord);
                for (let j = 0; j < subAnagrams.length; j++){
                    newEntry = focus + subAnagrams[j];
                    anagrams.push(newEntry);
                }
            }
            return anagrams;
        }
    }
    

    return generateAnagrams(string);
}

let convertToCelsius = (number) => {
    return Math.ceil((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    let newArray = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    array.forEach((element, index) => {
        newArray.push(alphabet.indexOf(element.toLowerCase()) + 1);
    })

    return newArray;
}
