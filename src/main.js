let demo = document.querySelector("#html");
// let n = 1
let n = 0; //n从0开始，what different?咿刚好字符串下标就是从0开始的
let str = `/* 你好，我叫隋鑫
*接下来我要展示一下我的前端功底
*首先准备一个div
*/
#div1{
   width: 200px;
   height: 200px;
   
}
/*接下来我把一个div变成八卦
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    border:none;
    -moz-box-shadow:5px 8px 17px #333333;
     -webkit-box-shadow:5px 8px 17px #333333;
      box-shadow:5px 8px 17px #333333;
}
/*接下来我把它变成黑白
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 然后我再加两个圈
*/
#div1::before{
    width: 100px;
    height: 100px;
    
   top:0;
    left:50%;
    background:#000;
    transform: translateX(-50%);
    border-radius: 50%;
    border:none;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(0,0,0,1) 23%, rgba(14,8,8,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    
    bottom:0;
    left:50%;
    background:#fff;
    transform: translateX(-50%);  
    border-radius: 50%;
    border: none;
    background: radial-gradient(circle, rgba(14,8,8,1) 0%, rgba(0,0,0,1) 22%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 100%); 
}

`; //申明一个字符串 我用了比较好用反引号``  而且字符串中有缩进，有空格
let str2 = "";

//如何字符串的回车在html也变成回车（默认的直接压缩为一个空格）？
//1. str = str.replace('\n', '<br>') // 只能替换一个，第一个换行\n
//2 .正则表达式表示所有回车，但是会出现<然后消失  以为下一步’<b‘--“<br”--"<br>"时html解析出了这是一个标签 然后就把标签转义就看到<了 就变成了此处的换行
// str = str.replace(/\n/g, '<br>') //所以正则表达式也不行

// demo.innerHTML = n
// demo.innerHTML = str[n]
// demo.innerHTML = str.substring((0, n))
let css = document.querySelector("#css");

//setTimeout()只执行一次就结束了
// setTimeout(() => {
//     n = n + 1
//     demo.innerHTML = n
// }, 1000)

//用setInterval()
// setInterval(() => {
//     n = n + 1
//     demo.innerHTML = n
// }, 1000)

// setInterval(() => { demo.innerHTML = n + 1 }, 1000)
//这样就不行？？？？？？

//老手不用setInterval()用递归的setTimeout()
// setTimeout(() => {
//     n = n + 1
//     demo.innerHTML = n
//     setTimeout(() => {
//         n = n + 1
//         demo.innerHTML = n
//         setTimeout(() => {
//             n = n + 1
//             demo.innerHTML = n
//         }, 1000)
//     }, 1000)
// }, 1000)

//函数封装

// let step = () => {
//     setTimeout(() => {
//         n = n + 1
//         demo.innerHTML = n
//         step()
//     }, 500)
// }

// //大师调用法调用函数
// step.call(undefined)

//添加条件
let step = () => {
  if (n < str.length) {
    setTimeout(() => {
      // str[n] === '\n' ? str2 + '<br>' : str2 + str[n]
      // str2 += str[n]; //这两行错误
      if (str[n] === "\n") {
        str2 += "<br>";
      } else if (str[n] === " ") {
        str2 += "&nbsp";
      } else {
        str2 += str[n];
      }

      // str2 += (str[n] === '\n' ? '<br>' : str[n])
      // demo.innerHTML = n
      // demo.innerHTML = str[n]
      // str2 += str[n]
      demo.innerHTML = str2;
      // demo.innerHTML = str.substring(0, n)
      // css.innerHTML = `body{color:#ff0000;}`
      css.innerHTML = str.substring(0, n);
      // css.innerHTML = str2 //这样写会在style出现html标签包含空格回车那种
      n = n + 1;
      window.scrollTo(0, 999999); //上下滚动， 那左右折行呢？
      html.scrollTo(0, 999999); //屏幕的没有滚动条的时候怎么让内容滚动
      // word -break: break-all 在哪添加这个属性
      // css.innerHTML = str.substring(0, n)
      // console.log(n)  console.log()调试大法
      step();
    }, 10);
  } else {
  }
};
//大师调用法调用函数
step.apply(null);
