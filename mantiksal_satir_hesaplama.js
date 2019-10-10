/******************************************************************/
/* Program Assignment:  PSP0.1                                    */
/* Name:                Sidar Yuksel                              */
/* Date:                05/05/2019                                */
/* Description:         Mantiksal Satir Hesaplama                 */
/******************************************************************/

/******************************************************************/
/* Listing Contents:                                              */
/* Reuse instructions                                             */
/*     require()                                                  */
/* Modification instructions                                      */
/*     readFileSync()                                             */
/*     XLSX.utils.book_new()                                      */
/*     Purpose: Creating new workbook                             */
/*     XLSX.writeFile()                                           */
/*     Purpose: Writing info into excel file                      */
/* Compilation instructions                                       */
/*     console.log()                                              */
/*     Purpose: Printing info on Console screen                   */
/******************************************************************/

let fs = require('fs');
let XLSX = require('xlsx');

let forSayisiVaryansHesaplama=0;
let ifSayisiVaryansHesaplama=0;
let elseIfSayisiVaryansHesaplama=0;
let elseSayisiVaryansHesaplama=0;
let degiskenSayisiVaryansHesaplama=0;
let consoleLogSayisiVaryansHesaplama=0;

//1A PSP0 programının "varyans_hesaplama.txt" text formatında mantiksal satır sayısını hesapla
//Excelden dosya oku
let dosyaOkuVaryansHesaplama = fs.readFileSync('varyans_hesaplama.txt', 'utf8');

for (let i=0; i<dosyaOkuVaryansHesaplama.length; i++){
  if(dosyaOkuVaryansHesaplama.slice(i,i+5) === 'for (' || dosyaOkuVaryansHesaplama.slice(i,i+4) === 'for(' ){
    ++forSayisiVaryansHesaplama;
  }
  else if(dosyaOkuVaryansHesaplama.slice(i,i+9) === 'else if (' || dosyaOkuVaryansHesaplama.slice(i,i+8) === 'else if(') {
    ++elseIfSayisiVaryansHesaplama;
  }
  else if(dosyaOkuVaryansHesaplama.slice(i,i+4) === 'if (' || dosyaOkuVaryansHesaplama.slice(i,i+3) === 'if(') {
    ++ifSayisiVaryansHesaplama;
  }
  else if(dosyaOkuVaryansHesaplama.slice(i,i+6) === 'else (' || dosyaOkuVaryansHesaplama.slice(i,i+5) === 'else(') {
    ++elseSayisiVaryansHesaplama;
  }
  else if(dosyaOkuVaryansHesaplama.slice(i,i+4) === 'let ' || dosyaOkuVaryansHesaplama.slice(i,i+6) === 'const ' || 
   dosyaOkuVaryansHesaplama.slice(i,i+4) === 'var '){
    ++degiskenSayisiVaryansHesaplama;
  }
  else if(dosyaOkuVaryansHesaplama.slice(i,i+12) === 'console.log('){
   ++consoleLogSayisiVaryansHesaplama;
 }
}

console.log('\nVaryans Hesaplama dosyasinin FOR dongusu sayisi:  '+ forSayisiVaryansHesaplama);
console.log('\nVaryans Hesaplama dosyasinin IF sayisi:  '+ ifSayisiVaryansHesaplama);
console.log('\nVaryans Hesaplama dosyasinin ELSE IF sayisi:  '+ elseIfSayisiVaryansHesaplama);
console.log('\nVaryans Hesaplama dosyasinin ELSE sayisi:  '+ elseSayisiVaryansHesaplama);
console.log('\nVaryans Hesaplama dosyasinin DEGISKEN sayisi:  '+ degiskenSayisiVaryansHesaplama);
console.log('\nVaryans Hesaplama dosyasinin CONSOLE LOG sayisi:  '+ consoleLogSayisiVaryansHesaplama);
console.log('\n\n\n');

//2A için mantiksal satir sayisi hesapla
let forSayisiSatirHesaplama=0;
let ifSayisiSatirHesaplama=0;
let elseIfSayisiSatirHesaplama=0;
let elseSayisiSatirHesaplama=0;
let degiskenSayisiSatirHesaplama=0;
let consoleLogSayisiSatirHesaplama=0;
//Excelden dosya oku
let dosyaOkuSatirHesaplama = fs.readFileSync('satir_hesaplama_main.txt', 'utf8');

for (let i=0; i<dosyaOkuSatirHesaplama.length; i++){
  if(dosyaOkuSatirHesaplama.slice(i,i+5) === 'for (' || dosyaOkuSatirHesaplama.slice(i,i+4) === 'for(' ){
    ++forSayisiSatirHesaplama;
  }
  else if(dosyaOkuSatirHesaplama.slice(i,i+9) === 'else if (' || dosyaOkuSatirHesaplama.slice(i,i+8) === 'else if('){
    ++elseIfSayisiSatirHesaplama;
  }
  else if(dosyaOkuSatirHesaplama.slice(i,i+4) === 'if (' || dosyaOkuSatirHesaplama.slice(i,i+3) === 'if('){
    ++ifSayisiSatirHesaplama;
  }
  else if(dosyaOkuSatirHesaplama.slice(i,i+6) === 'else (' || dosyaOkuSatirHesaplama.slice(i,i+5) === 'else('){
    ++elseSayisiSatirHesaplama;
  }
  else if(dosyaOkuSatirHesaplama.slice(i,i+4) === 'let ' || dosyaOkuSatirHesaplama.slice(i,i+6) === 'const ' || 
  dosyaOkuSatirHesaplama.slice(i,i+4) === 'var '){
    ++degiskenSayisiSatirHesaplama;
  }
  else if(dosyaOkuSatirHesaplama.slice(i,i+12) === 'console.log('){
   ++consoleLogSayisiSatirHesaplama;
 }
}

console.log('\nSatir Hesaplama dosyasinin FOR dongusu sayisi:  '+ forSayisiSatirHesaplama);
console.log('\nSatir Hesaplama dosyasinin IF sayisi:  '+ ifSayisiSatirHesaplama);
console.log('\nSatir Hesaplama dosyasinin ELSE IF sayisi:  '+ elseIfSayisiSatirHesaplama);
console.log('\nSatir Hesaplama dosyasinin ELSE sayisi:  '+ elseSayisiSatirHesaplama);
console.log('\nSatir Hesaplama dosyasinin DEGISKEN sayisi:  '+ degiskenSayisiSatirHesaplama);
console.log('\nSatir Hesaplama dosyasinin CONSOLE LOG sayisi:  '+ consoleLogSayisiSatirHesaplama);
console.log('\n\n\n');

//2A için mantiksal satir sayisi hesapla
let forSayisiMantiksalSatirHesaplama=0;
let ifSayisiMantiksalSatirHesaplama=0;
let elseIfSayisiMantiksalSatirHesaplama=0;
let elseSayisiMantiksalSatirHesaplama=0;
let degiskenSayisiMantiksalSatirHesaplama=0;
let consoleLogSayisiMantiksalSatirHesaplama=0;

//Excelden dosya oku
let dosyaOkuMantiksalSatirHesaplama = fs.readFileSync('mantiksal_satir_hesaplama.js', 'utf8');

for (let i=0; i<dosyaOkuMantiksalSatirHesaplama.length; i++){
  if(dosyaOkuMantiksalSatirHesaplama.slice(i,i+5) === 'for (' || dosyaOkuMantiksalSatirHesaplama.slice(i,i+4) === 'for(' ){
    ++forSayisiMantiksalSatirHesaplama;
  }
  else if(dosyaOkuMantiksalSatirHesaplama.slice(i,i+9) === 'else if (' || dosyaOkuMantiksalSatirHesaplama.slice(i,i+8) === 'else if('){
    ++elseIfSayisiMantiksalSatirHesaplama;
  }
  else if(dosyaOkuMantiksalSatirHesaplama.slice(i,i+4) === 'if (' || dosyaOkuMantiksalSatirHesaplama.slice(i,i+3) === 'if('){
    ++ifSayisiMantiksalSatirHesaplama;
  }
  else if(dosyaOkuMantiksalSatirHesaplama.slice(i,i+6) === 'else (' || dosyaOkuMantiksalSatirHesaplama.slice(i,i+5) === 'else('){
    ++elseSayisiMantiksalSatirHesaplama;
  }
  else if(dosyaOkuMantiksalSatirHesaplama.slice(i,i+4) === 'let ' || dosyaOkuMantiksalSatirHesaplama.slice(i,i+6) === 'const ' || 
   dosyaOkuVaryansHesaplama.slice(i,i+4) === 'var '){
    ++degiskenSayisiMantiksalSatirHesaplama;
  }
  else if(dosyaOkuMantiksalSatirHesaplama.slice(i,i+12) === 'console.log('){
   ++consoleLogSayisiMantiksalSatirHesaplama;
 }
}

console.log('\nMantiksal Satir Hesaplama dosyasinin FOR dongusu sayisi:  '+ forSayisiMantiksalSatirHesaplama);
console.log('\nMantiksal Satir Hesaplama dosyasinin IF sayisi:  '+ ifSayisiMantiksalSatirHesaplama);
console.log('\nMantiksal Satir Hesaplama dosyasinin ELSE IF sayisi:  '+ elseIfSayisiMantiksalSatirHesaplama);
console.log('\nMantiksal Satir Hesaplama dosyasinin ELSE sayisi:  '+ elseSayisiMantiksalSatirHesaplama);
console.log('\nMantiksal Satir Hesaplama dosyasinin DEGISKEN sayisi:  '+ degiskenSayisiMantiksalSatirHesaplama);
console.log('\nMantiksal Satir Hesaplama dosyasinin CONSOLE LOG sayisi:  '+ consoleLogSayisiMantiksalSatirHesaplama);
console.log('\n\n\n');

const yazdirSatir = XLSX.utils.book_new();
yazdirSatir.SheetNames.push('MantiksalSatirSayisi');
const ssData = [['Program Number','Object Name', 'Object LOC', 'Total Program LOC']];

//1A projesini Excele satır sayısını yazdır
const excelCell1A1 = ['1A', 'FOR Sayisi', forSayisiVaryansHesaplama];
ssData.push(excelCell1A1);
const excelCell1A2 = ['1A', 'IF Sayisi', ifSayisiVaryansHesaplama];
ssData.push(excelCell1A2);
const excelCell1A3 = ['1A', 'ELSE IF Sayisi', elseIfSayisiVaryansHesaplama];
ssData.push(excelCell1A3);
const excelCell1A4 = ['1A', 'ELSE Sayisi', elseSayisiVaryansHesaplama];
ssData.push(excelCell1A4);
const excelCell1A5 = ['1A', 'DEGISKEN Sayisi', degiskenSayisiVaryansHesaplama];
ssData.push(excelCell1A5);
const excelCell1A6 = ['1A', 'CONSOLE LOG Sayisi', consoleLogSayisiVaryansHesaplama];
ssData.push(excelCell1A6);

//2A projesini Excele satır sayılarını yazdır
const excelCell2A1 = ['2A', 'FOR Sayisi', forSayisiSatirHesaplama];
ssData.push(excelCell2A1);
const excelCell2A2 = ['2A', 'IF Sayisi', ifSayisiSatirHesaplama];
ssData.push(excelCell2A2);
const excelCell2A3 = ['2A', 'ELSE IF Sayisi', elseIfSayisiSatirHesaplama];
ssData.push(excelCell2A3);
const excelCell2A4 = ['2A', 'ELSE Sayisi', elseSayisiSatirHesaplama];
ssData.push(excelCell2A4);
const excelCell2A5 = ['2A', 'DEGISKEN Sayisi', degiskenSayisiSatirHesaplama];
ssData.push(excelCell2A5);
const excelCell2A6 = ['2A', 'CONSOLE LOG Sayisi', consoleLogSayisiSatirHesaplama];
ssData.push(excelCell2A6);

//3A projesini Excele satır sayılarını yazdır
const excelCell3A1 = ['3A', 'FOR Sayisi', forSayisiMantiksalSatirHesaplama];
ssData.push(excelCell3A1);
const excelCell3A2 = ['3A', 'IF Sayisi', ifSayisiMantiksalSatirHesaplama];
ssData.push(excelCell3A2);
const excelCell3A3 = ['3A', 'ELSE IF Sayisi', elseIfSayisiMantiksalSatirHesaplama];
ssData.push(excelCell3A3);
const excelCell3A4 = ['3A', 'ELSE Sayisi', elseSayisiMantiksalSatirHesaplama];
ssData.push(excelCell3A4);
const excelCell3A5 = ['3A', 'DEGISKEN Sayisi', degiskenSayisiMantiksalSatirHesaplama];
ssData.push(excelCell3A5);
const excelCell3A6 = ['3A', 'CONSOLE LOG Sayisi', consoleLogSayisiMantiksalSatirHesaplama];
ssData.push(excelCell3A6);

//Her program için satir sayilarini ayri ayri topla
const toplam_1A_SatirSayisi = forSayisiVaryansHesaplama + ifSayisiVaryansHesaplama + elseIfSayisiVaryansHesaplama + 
elseSayisiVaryansHesaplama + degiskenSayisiVaryansHesaplama + consoleLogSayisiVaryansHesaplama;
const toplam_2A_SatirSayisi = forSayisiSatirHesaplama + ifSayisiSatirHesaplama + elseIfSayisiSatirHesaplama + 
elseSayisiSatirHesaplama + degiskenSayisiSatirHesaplama + consoleLogSayisiSatirHesaplama;
const toplam_3A_SatirSayisi = forSayisiMantiksalSatirHesaplama + ifSayisiMantiksalSatirHesaplama + 
elseIfSayisiMantiksalSatirHesaplama + elseSayisiMantiksalSatirHesaplama + degiskenSayisiMantiksalSatirHesaplama + 
consoleLogSayisiMantiksalSatirHesaplama;

//1A-2A-3A bütün programlarin satir sayilarinin toplamini hesapla
const toplamLOC = toplam_1A_SatirSayisi + toplam_2A_SatirSayisi + toplam_3A_SatirSayisi;
console.log('1A-2A-3A toplam LOC: ' + toplamLOC);

//1A-2A-3A toplam LOC sayısını excele ekleme
const excelCellToplam = ['', '', '', toplamLOC];
ssData.push(excelCellToplam);

const satirSayisi = XLSX.utils.aoa_to_sheet(ssData);
yazdirSatir.Sheets['MantiksalSatirSayisi'] = satirSayisi;
XLSX.writeFile(yazdirSatir, './Mantiksal_Satir_Sayisi_Hesaplama.xlsx', { bookType: 'xlsx', bookSST: true, type: 'binary' });
console.log("\nSatır sayısı hesaplaması bitti. Sonuçları görmek için Mantiksal_Satir_Sayisi_Hesaplama.xlsx excel dosyasına bakınız!!!\n"); 