console.log("hi this is my script");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    console.log("clicked");

    const key = "ema_live_SBg1KNH8yddgRYAYKt7AujgB0lJrkdGBnPRoKhZI";
    const email = document.getElementById("username").value;
    const url = `https://api.emailvalidation.io/https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    let result = {
        "tag": "",
        "free": true,
        "role": false,
        "user": "kshitijshresth2004",
        "email": "kshitijshresth2004@gmail.com",
        "score": 0.64,
        "state": "deliverable",
        "domain": "gmail.com",
        "reason": "valid_mailbox",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": true,
        "did_you_mean": "",
        "format_valid": true
    };

    let str = ``;
    for (let key of Object.keys(result)) {
        str = str + `<div>${key}:${result[key]}</div>`;
    }

    console.log(str);
    document.getElementById("resultcont").innerHTML = str;
});
