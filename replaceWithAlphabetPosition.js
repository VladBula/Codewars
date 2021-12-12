function alphabetPosition(text) {
    let char = "";
    let arr = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let arr2 = "";

    for (let i = 0; i < text.length; i++){
        char = text[i].toLowerCase();
      
        if(alphabet.indexOf(char) > -1){
      arr.push(alphabet.indexOf(char) + 1);
    }
  }
  return arr2 = arr.join(" ");;
}