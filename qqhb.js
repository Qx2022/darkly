

/**

==ＱＱ一笔画红包自定义iOS脚本修改教程==

///////////////一定先看教程.再操作/////////////

使用方法：开启抓包.打开ｑｑ.发送一个自定义红包(如果没有自定义红包就创建)发送成功后.找到以下的数据⬇️

所有需要的数据都在"https://h5.qianbao.qq.com/sendRedpack/cgi/saveOneStrokeSubject?"请求参数寻找

请求参数 ：Referer  urll  userAgent  ck。

弄好所有运行一次即可 qq刷新一下 (返回聊天界面再进红包界面即可)

填写到对应的⬇️面带有'这里😯'里面


ck   urll  填写一次可短暂使用
Referer    userAgent  填写一次可长久使用


 */




var ck = ''//ck填写这里


var Referer = ''//Referer填写这里


var urll = ''//url路径"全部"复制拷贝填写这里


var userAgent = ''//use-rAgrnt填写这里



//如果想要添加多个自定义. 代码的🆔需要变动id":"0000000000000".同样的🆔只会覆盖或者无效。 更多样式自行寻找。执行完刷新Ｑ红包页面即可。

var daima = '{"connects":[{"x1":343,"y1":281,"x2":281,"y2":218},{"x1":281,"y1":218,"x2":218,"y2":156},{"x1":218,"y1":156,"x2":156,"y2":156},{"x1":156,"y1":156,"x2":93,"y2":156},{"x1":93,"y1":156,"x2":31,"y2":218},{"x1":31,"y1":218,"x2":31,"y2":281},{"x1":31,"y1":281,"x2":31,"y2":343},{"x1":31,"y1":343,"x2":93,"y2":406},{"x1":93,"y1":406,"x2":156,"y2":468},{"x1":156,"y1":468,"x2":218,"y2":531},{"x1":218,"y1":531,"x2":281,"y2":593},{"x1":281,"y1":593,"x2":343,"y2":656},{"x1":343,"y1":656,"x2":406,"y2":593},{"x1":406,"y1":593,"x2":468,"y2":531},{"x1":468,"y1":531,"x2":531,"y2":468},{"x1":531,"y1":468,"x2":593,"y2":406},{"x1":593,"y1":406,"x2":656,"y2":343},{"x1":656,"y1":343,"x2":656,"y2":281},{"x1":656,"y1":281,"x2":656,"y2":218},{"x1":656,"y1":218,"x2":593,"y2":156},{"x1":593,"y1":156,"x2":531,"y2":156},{"x1":531,"y1":156,"x2":468,"y2":156},{"x1":468,"y1":156,"x2":406,"y2":218},{"x1":406,"y1":218,"x2":343,"y2":281}],"vertexes":[],"vertexCount":24,"img":{},"imgUrl":"http://img01.sogoucdn.com/app/a/100520146/48ace84e4156ac464751287c02afb314","id":"0000000000000"}'

//分界线
 
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxea3d1=["\x30","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x41","\x42","\x43","\x44","\x45","\x46","\x47","\x48","\x49","\x4A","\x4B","\x4C","\x4D","\x4E","\x4F","\x50","\x51","\x52","\x53","\x54","\x55","\x56","\x57","\x58","\x59","\x5A","\x2D","","\x72\x61\x6E\x64\x6F\x6D","\x63\x65\x69\x6C","\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12\uD83D\uDD12","\u26A0\uFE0F\u811A\u672C\u53EA\u4F9B\u5A31\u4E50\uFF0C\u8BF7\u5728\u4E0B\u8F7D\u540E\x32\x34\u5C0F\u65F6\u5185\u5220\u9664\uFF0C\u4E0D\u5F97\u7528\u4E8E\u5176\u5B83\u975E\u6CD5\u7528\u9014\uFF0C\u5426\u5219\u540E\u679C\u81EA\u8D1F\u3002\u26A0\uFE0F","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x35\x2E\x71\x69\x61\x6E\x62\x61\x6F\x2E\x71\x71\x2E\x63\x6F\x6D","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38","\x68\x35\x2E\x71\x69\x61\x6E\x62\x61\x6F\x2E\x71\x71\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x2D\x48\x61\x6E\x73\x3B\x71\x3D\x30\x2E\x39","\x6C\x6F\x67","\u9632\u4F2A\u7801\x3A\x0D","\x0D","\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65","\x0A\x0A","\x62\x6F\x64\x79","\x65\x72\x72\x6F\x72","\x74\x68\x65\x6E","\x66\x65\x74\x63\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var mll=[__Oxea3d1[0x0],__Oxea3d1[0x1],__Oxea3d1[0x2],__Oxea3d1[0x3],__Oxea3d1[0x4],__Oxea3d1[0x5],__Oxea3d1[0x6],__Oxea3d1[0x7],__Oxea3d1[0x8],__Oxea3d1[0x8],__Oxea3d1[0x9],__Oxea3d1[0xa],__Oxea3d1[0xb],__Oxea3d1[0xc],__Oxea3d1[0xd],__Oxea3d1[0xe],__Oxea3d1[0xf],__Oxea3d1[0x10],__Oxea3d1[0x11],__Oxea3d1[0x12],__Oxea3d1[0x13],__Oxea3d1[0x14],__Oxea3d1[0x15],__Oxea3d1[0x16],__Oxea3d1[0x17],__Oxea3d1[0x18],__Oxea3d1[0x19],__Oxea3d1[0x1a],__Oxea3d1[0x1b],__Oxea3d1[0x1c],__Oxea3d1[0x1d],__Oxea3d1[0x1e],__Oxea3d1[0x1f],__Oxea3d1[0x20],__Oxea3d1[0x21],__Oxea3d1[0x22]];var jqm=generateMixed(8)+ __Oxea3d1[0x23]+ generateMixed(4)+ __Oxea3d1[0x23]+ generateMixed(6)+ __Oxea3d1[0x23]+ generateMixed(4)+ __Oxea3d1[0x23]+ generateMixed(8)+ __Oxea3d1[0x23]+ generateMixed(9);function generateMixed(_0x808ax4){var _0x808ax5=__Oxea3d1[0x24];for(var _0x808ax6=0;_0x808ax6< _0x808ax4;_0x808ax6++){var _0x808ax7=Math[__Oxea3d1[0x26]](Math[__Oxea3d1[0x25]]()* 35);_0x808ax5+= mll[_0x808ax7]};return _0x808ax5}var dd=__Oxea3d1[0x27];var xx=__Oxea3d1[0x28];const url=urll;const method=`${__Oxea3d1[0x29]}`;const headers={'\x41\x63\x63\x65\x70\x74':`${__Oxea3d1[0x2a]}`,'\x4F\x72\x69\x67\x69\x6E':`${__Oxea3d1[0x2b]}`,'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':`${__Oxea3d1[0x2c]}`,'\x43\x6F\x6F\x6B\x69\x65':ck,'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':`${__Oxea3d1[0x2d]}`,'\x48\x6F\x73\x74':`${__Oxea3d1[0x2e]}`,'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':`${__Oxea3d1[0x2f]}`,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':userAgent,'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':`${__Oxea3d1[0x30]}`};const body=daima;console[__Oxea3d1[0x31]](xx);console[__Oxea3d1[0x31]](__Oxea3d1[0x32]+ jqm+ __Oxea3d1[0x33]);const myRequest={url:url,method:method,headers:headers,body:body};$task[__Oxea3d1[0x39]](myRequest)[__Oxea3d1[0x38]]((_0x808axf)=>{console[__Oxea3d1[0x31]](_0x808axf[__Oxea3d1[0x34]]+ __Oxea3d1[0x35]+ _0x808axf[__Oxea3d1[0x36]]);$done()},(_0x808ax10)=>{console[__Oxea3d1[0x31]](_0x808ax10[__Oxea3d1[0x37]]);console[__Oxea3d1[0x31]](dd);$done()});;;(function(_0x808ax11,_0x808ax12,_0x808ax13,_0x808ax14,_0x808ax15,_0x808ax16){_0x808ax16= __Oxea3d1[0x3a];_0x808ax14= function(_0x808ax17){if( typeof alert!== _0x808ax16){alert(_0x808ax17)};if( typeof console!== _0x808ax16){console[__Oxea3d1[0x31]](_0x808ax17)}};_0x808ax13= function(_0x808ax18,_0x808ax11){return _0x808ax18+ _0x808ax11};_0x808ax15= _0x808ax13(__Oxea3d1[0x3b],_0x808ax13(_0x808ax13(__Oxea3d1[0x3c],__Oxea3d1[0x3d]),__Oxea3d1[0x3e]));try{_0x808ax11= __encode;if(!( typeof _0x808ax11!== _0x808ax16&& _0x808ax11=== _0x808ax13(__Oxea3d1[0x3f],__Oxea3d1[0x40]))){_0x808ax14(_0x808ax15)}}catch(e){_0x808ax14(_0x808ax15)}})({})
