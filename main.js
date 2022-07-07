// Write class below
class ShiftCipher {
    constructor(shiftBy) {
      this._shiftBy = shiftBy;
    }
    encrypt(phrase) {
      if (typeof phrase != 'string') {
        console.log('error!')
      }
      console.log(phrase)
      let shift = this._shiftBy
      let encryptedPhrase = '';
      let code = [];
      phrase = phrase.toLowerCase();
      for (let i = 0; i < phrase.length; i++) {
        code.push(phrase.charCodeAt(i)+this._shiftBy);
      } 
      for (let j=0; j <code.length; j++) {
        if (code[j]>122) {
          code[j] -= 26;
        } else if (code[j]< 97){
          code[j]+=26;
        }
        encryptedPhrase += String.fromCharCode(code[j]).toUpperCase();
       } return encryptedPhrase
    }
    decrypt(phrase) {
      console.log(phrase)
      let shift = this._shiftBy
      let decryptedPhrase = '';
      let code = [];
      phrase = phrase.toUpperCase();
      for (let i=0; i<phrase.length; i++) {
        code.push(phrase.charCodeAt(i)-this._shiftBy);
      } 
      for (let j=0; j<code.length; j++) {
        if(code[j]<65) {
          code[j]+=26;
        } else if (code[j] >90) {
          code[j]-=26;
        }
        decryptedPhrase += String.fromCharCode(code[j]).toLowerCase();
      } return decryptedPhrase;
    } 
  }
  
  let string2 = new ShiftCipher(1)
  let encryption = string2.encrypt('Z');
  console.log(string2.decrypt(encryption))  
  //let string = String.fromCharCode(71, 82, 65, 72, 65, 77)
  //console.log(string)