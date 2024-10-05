var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);var e=new Date("9/12/2024 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),o=new Date("9/12/2024 00:00:00"),n=(now-o)/1e3/60/60/24,r=Math.floor(n),i=(now-o)/1e3/60/60-24*r,s=Math.floor(i);1==String(s).length&&(s="0"+s);var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);1==String(l).length&&(l="0"+l);var g=(now-o)/1e3-86400*r-3600*s-60*l,b=Math.round(g);1==String(b).length&&(b="0"+b);let c="";c=s<18&&s>=9?`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold;color: black;">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`:`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);

// // 创建一个变量now，用于存储当前时间
// var now = new Date();

// // 定义一个函数createtime，用于更新时间显示
// function createtime() {
//     // 每次调用函数时，将当前时间增加1000毫秒（1秒）
//     now.setTime(now.getTime() + 1e3);

//     // 设置一个特定的时间点，这里用的是2024年9月12日00:00:00
//     var e = new Date("9/12/2024 00:00:00");

//     // 计算从特定时间点到当前时间的总秒数，并转换为天数（1天=24小时，1小时=3600秒，1天=86400秒）
//     // 然后乘以17，这个17可能是一个特定的系数，用于调整时间计算
//     var t = Math.trunc(234e8 + (now - e) / 1e3 * 17);

//     // 将天数转换为天文单位，这里使用1496e5作为转换系数
//     var a = (t / 1496e5).toFixed(6);

//     // 创建一个新的日期对象，用于计算从特定时间点到当前时间的天数、小时、分钟和秒数
//     var o = new Date("9/12/2024 00:00:00");

//     // 计算从特定时间点到当前时间的总天数
//     var n = (now - o) / 1e3 / 60 / 60 / 24;
//     var r = Math.floor(n); // 取整数部分，表示天数

//     // 计算剩余的小时数
//     var i = (now - o) / 1e3 / 60 / 60 - 24 * r;
//     var s = Math.floor(i); // 取整数部分，表示小时数

//     // 如果小时数是一位数，前面补0
//     if (String(s).length == 1) {
//         s = "0" + s;
//     }

//     // 计算剩余的分钟数
//     var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s;
//     var l = Math.floor(d); // 取整数部分，表示分钟数

//     // 如果分钟数是一位数，前面补0
//     if (String(l).length == 1) {
//         l = "0" + l;
//     }

//     // 计算剩余的秒数
//     var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l;
//     var b = Math.round(g); // 四舍五入到最接近的整数，表示秒数

//     // 如果秒数是一位数，前面补0
//     if (String(b).length == 1) {
//         b = "0" + b;
//     }

//     // 构建显示的字符串
//     let c = "";
//     // 根据当前的小时数（9点到18点之间），选择不同的图片和文本
//     c = s < 18 && s >= 9 ? `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>` :
//     `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;

//     // 如果页面上存在id为workboard的元素，则更新其内容
//     if (document.getElementById("workboard")) {
//         document.getElementById("workboard").innerHTML = c;
//     }
// }

// // 设置一个定时器，每秒调用一次createtime函数，更新时间显示
// setInterval(() => {
//     createtime();
// }, 1e3);