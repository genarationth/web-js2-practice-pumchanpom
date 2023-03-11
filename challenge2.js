// Challenge #2

// name, country, hobby
// Hi, my name is ${name}. I am from ${country} and enjoy ${hobby}.

let questionsEnglish = ["Name", "Country", "Hobby"];
let questionsThai = ["ชื่อ", "ประเทศ", "งานอดิเรก"];

let findId = (id, result) => {
    document.getElementById(id).innerHTML = result;
}
    
let askEnglish = () => {
    let replyEnglish = [];
    for (let question of questionsEnglish) {
        replyEnglish = replyEnglish.concat(prompt(question, "Please reply here.").trim());
    }
    alert("Thank you! Here are your responses: " + replyEnglish);
    let messageEnglish = `Hello, my name is ${replyEnglish[0]}. I am from ${replyEnglish[1]}. I enjoy ${replyEnglish[2]}.`
    findId("personalData", messageEnglish);
    findId("name", replyEnglish[0]);
    findId("country", replyEnglish[1]);
    findId("hobby", replyEnglish[2]);
}

let askThai = () => {
    let replyThai = [];
    for (let question of questionsThai) {
        replyThai = replyThai.concat(prompt(question, "กรุณาตอบในช่องนี้").trim());
    }
    alert("ขอบคุณครับ นี่คือคำตอบของคุณครับ: " + replyThai);
    let messageThai = `สวัสดี เราชื่อ${replyThai[0]} เราอาศัยอยู่ที่ประเทศ${replyThai[1]} เราชอบ${replyThai[2]}`
    document.getElementById("personalData").innerHTML = messageThai;
    let getId = ["name-thai-reply", "country-thai-reply", "hobby-thai-reply"];
    let output = [replyThai[0], replyThai[1], replyThai[2]];
    findId("personalData", messageThai);
    findId("name", replyThai[0]);
    findId("country", replyThai[1]);
    findId("hobby", replyThai[2]);
}
