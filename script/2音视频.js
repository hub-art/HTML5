//音视频标签对象的访问
//练习1 捕获video
//对象名.属性名  对象名["属性名"]
// var obj = {
//     "name":"zhangsan"
// }
// obj.name
// obj["name"]
document.getElementsByTagName("video")
console.dir(video)
//video对象的常用属性和方法

//练习2 audio
var audio = document.getElementsByTagName("audio")[0]
console.dir(audio)
//audio对象的常用属性和方法


//简易播放器
//不活动一个button，绑定onclick，实现音乐播放play()
document.getElementsByTagName("button")[0].onclick = function(){
    audio.play();
}
//捕获第二个button，绑定onclick，实现音乐暂停pause()
document.getElementsByTagName("button")[1].onclick = function(){
    audio.pause
}
//捕获第三个button，绑定onclick，实现音乐静音muted
document.getElementsByTagName("button")[2].onclick = function(){
    audio.muted = true
}