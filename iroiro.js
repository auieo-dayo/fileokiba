//NowTime
const nowtime = {
    yyyyMMdd: ()=> {
        const now = new Date();
        const timestamp = now.toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          //hour: "2-digit",
          //minute: "2-digit",
          //second: "2-digit",
        });
        return(timestamp);
    },
    hhmmss: ()=> {
        const now = new Date();
        const timestamp = now.toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo",
          //year: "numeric",
          //month: "2-digit",
          //day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        return(timestamp);
    },
    full: ()=> {
        const now = new Date();
        const timestamp = now.toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        return(timestamp);
    },
    hh: ()=> {
        const now = new Date();
        const timestamp = now.toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo",
          //year: "numeric",
          //month: "2-digit",
          //day: "2-digit",
          hour: "2-digit"
          //minute: "2-digit",
          //second: "2-digit",
        });
        return(timestamp.replace("時",""));
    }
  }
  //おはよう
  function time(hour) {
    if (!hour) {
        return;
    }
    if (hour > 19 || hour == "0" || hour == 0) {
        return("こんばんわ")
    } else {
        if ( hour > 0 &&  hour < 3) {
            return("こんばんわ");
        } else {
            if (hour > 11) {
                return("こんにちは")
            }  else {
                return("おはようございます")
            }
        } 
}
  }
  //乱数
  function random_int(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a; // 修正: b - a + 1 に変更
}
//cookie
const CookieManager = {
  set: (name, value, days = 7) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
  },

  get: (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  },
  delete: (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
//通知
const NotificationManager = {
  // 📌 通知を送信する関数
  send: function (title = "通知", body = "これは通知です", icon = "", url = "") {
      if (Notification.permission !== "granted") {
          Notification.requestPermission().then(permission => {
              if (permission === "granted") {
                  this._showNotification(title, body, icon, url);
              }
          });
      } else {
          this._showNotification(title, body, icon, url);
      }
  },

  // 📌 通知の表示
  _showNotification: function (title, body, icon, url) {
      let notification = new Notification(title, { body, icon });

      if (url) {
          notification.onclick = () => window.open(url, "_blank");
      }
  }
};