let myPage = ['canoepage2', 'vikingpage1', 'vikingpage2', 'cogship1', 'cogship2', 'caravelpage1', 'caravelpage2', 'galleypage1', 'galleypage2', 'steampage1', 'steampage2', 'presentpage1', 'beforeconcluding', 'conclusionpage'];
let pageCount = 0;

let answer1 = "";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";
let answer6 = "";

let effect1 = "";
let effect2 = "";
let effect3 = "";
let effect4 = "";
let effect5 = "";
let effect6 = "";
let effects = [];

function resetPage(){
  pageCount = 0;
  let nextBtn = document.getElementById("nextButton");
  nextBtn.style.opacity = "1";
  nextBtn.style.zIndex = "10";
  btnGroupHidden();
  // Reset Answers
  answer1 = "";
  answer2 = "";
  answer3 = "";
  answer4 = "";
  answer5 = "";
  answer6 = "";
  // Reset Effects
  effect1 = "";
  effect2 = "";
  effect3 = "";
  effect4 = "";
  effect5 = "";
  effect6 = "";
  effects = [];
  console.log("effect length : "+effects.length);
  // Reset All Conclusion
  for(i = 0; i < 6; i++){
    document.getElementsByClassName('answerConclusion')[i].innerHTML = "________";
  }
  document.getElementById('shipBorn').innerHTML = "ไม่มีเรือลำใดเกิดขึ้นมาเลย";
  for(i = 0; i < 6; i++){
    document.getElementsByClassName('shipDetails')[i].innerHTML = "";
  }

  // Reset Color of Answer
  document.querySelector('#canoeQuiz').dataset.scene = "";
  document.querySelector('#vikingQuiz').dataset.scene = "";
  document.querySelector('#cogQuiz').dataset.scene = "";
  document.querySelector('#caravelQuiz').dataset.scene = "";
  document.querySelector('#galleyQuiz').dataset.scene = "";
  document.querySelector('#steamQuiz').dataset.scene = "";
}

function btnGroupShow(){
  let buttonGroup = document.getElementById("button_Group");
  buttonGroup.style.opacity = "1";
  buttonGroup.style.zIndex = "10";

  document.querySelector('#page').dataset.active = 1;
}

function btnGroupHidden(){
  let buttonGroup = document.getElementById("button_Group");
  buttonGroup.style.opacity = "0";
  buttonGroup.style.zIndex = "-10";
}

function nextPage(){
  let nextBtn = document.getElementById("nextButton");
  page.dataset.scene = myPage[pageCount%(myPage.length)];
  console.log("Page Number : " + pageCount%(myPage.length));
  console.log("Page : " + myPage[pageCount%(myPage.length)]);
  pageCount++;

  if(pageCount == myPage.length){
    nextBtn.style.opacity = "0";
    nextBtn.style.zIndex = "-10";
    btnGroupHidden();
    showAnswer();
  }
}

function effectsList(){
  if(effect1 != ""){
    effects.push(effect1);
  }
  if(effect2 != ""){
    effects.push(effect2);
  }
  if(effect3 != ""){
    effects.push(effect3);
  }
  if(effect4 != ""){
    effects.push(effect4);
  }
  if(effect5 != ""){
    effects.push(effect5);
  }
  if(effect6 != ""){
    effects.push(effect6);
  }
  console.log('ผลกระทบ : '+effects);
  console.log('Effect Length : ' +effects.length);
}

function showAnswer(){
  // Answer List
  console.log("คำตอบข้อที่ 1 : " + answer1);
  console.log("คำตอบข้อที่ 2 : " + answer2);
  console.log("คำตอบข้อที่ 3 : " + answer3);
  console.log("คำตอบข้อที่ 4 : " + answer4);
  console.log("คำตอบข้อที่ 5 : " + answer5);
  console.log("คำตอบข้อที่ 6 : " + answer6);

  if(answer1 != ""){
    document.getElementsByClassName('answerConclusion')[0].innerHTML = answer1;
  }
  if(answer2 != ""){
    document.getElementsByClassName('answerConclusion')[1].innerHTML = answer2;
  }
  if(answer3 != ""){
    document.getElementsByClassName('answerConclusion')[2].innerHTML = answer3;
  }
  if(answer4 != ""){
    document.getElementsByClassName('answerConclusion')[3].innerHTML = answer4;
  }
  if(answer5 != ""){
    document.getElementsByClassName('answerConclusion')[4].innerHTML = answer5;
  }
  if(answer6 != ""){
    document.getElementsByClassName('answerConclusion')[5].innerHTML = answer6;
  }

// Ship List
  effectsList();
  if(effects.length > 0){
    document.getElementById('shipBorn').innerHTML = effects;
  }
  else{
    document.getElementById('shipBorn').innerHTML = "ไม่มีเรือลำใดเกิดขึ้นมาเลย";
  }
  // Ship List Details
  if(effects.indexOf(" Viking ship") !== -1){
    document.getElementsByClassName('shipDetails')[0].innerHTML = '<b>Viking ship </b> สามารถใช้ตกปลา มีน้ำหนักเบา ทำให้เดินเรือได้เร็ว แลเป็นเรือขึ้นชื่อที่ชาวไวกิ้งใช้เพื่อการขโมยและหลบหนีอย่างรวดเร็ว';
  }
  if(effects.indexOf(" Cog ship") !== -1){
    document.getElementsByClassName('shipDetails')[1].innerHTML = '<b>Cog ship </b> เรือขนาดใหญ่ มักใช้ขนย้ายอุปกรณ์ทางการรบ และโจรสลัดก็ชอบใช้เรือประเภทนี้ในการดักชิงเสบียงและอาวุธทางทะเล';
  }
  if(effects.indexOf(" Caravel") !== -1){
    document.getElementsByClassName('shipDetails')[2].innerHTML = '<b>Caravel </b> เรือใบขนาดใหญ่ ที่พัฒนาให้เร็วกว่าเรือใบของสเปน ใช้ในการสำรวจดินแดน ทำให้พบดินแดนใหม่ เกิดการย้ายถิ่นฐาน แลกเปลี่ยนวัฒนธรรม';
  }
  if(effects.indexOf(" Galley") !== -1){
    document.getElementsByClassName('shipDetails')[3].innerHTML = '<b>Galley </b> ถูกพัฒนาขึ้นเพื่อการรบโดยเฉพาะ ใช้คนพายจำนวนมาก มีความเร็วสูง';
  }
  if(effects.indexOf(" Steam boat") !== -1){
    document.getElementsByClassName('shipDetails')[4].innerHTML = '<b>Steam boat </b> เรือจักรไอน้ำ นิยมใช้ล่องตามแม่น้ำ ข้ามฝั่ง เห็นได้ถึงพัฒนาการเรือที่ไม่ใช้แรงมนุษย์แล้ว ใช้เป็นเครื่องจักรในการเดินเรือแทน';
  }
  if(effects.indexOf(" เรือปัจจุบัน") !== -1){
    document.getElementsByClassName('shipDetails')[5].innerHTML = '<b>เรือปัจจุบัน </b> สามารถใช้ตกปลา มีน้ำหนักเบา ทำให้เดินเรือได้เร็ว แลเป็นเรือขึ้นชื่อที่ชาวไวกิ้งใช้เพื่อการขโมยและหลบหนีอย่างรวดเร็ว';
  }
}