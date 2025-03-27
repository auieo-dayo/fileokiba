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
    if (hour > 19 || hour === 0) {
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