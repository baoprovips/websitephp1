function daoNutDN(){
    var u = document.getElementById("un").value;
    var p = document.getElementById("mk").value;
    if (u.length>0 && p.length>0) 
        document.getElementById("btndangnhap").disabled=false;
    else
        document.getElementById("btndangnhap").disabled=true;
}


function daoTT() {
    var mk = document.getElementById("mk");
    mk.type = (mk.type === "password")? "text":"password";
} 
// var button = document.getElementById("btndangnhap");
// button.onclick = function() {
//   alert("Đăng nhập thành công");

//   // Sử dụng AJAX để tải nội dung mới vào phần tử có id "content"
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       document.getElementById("content").innerHTML = xhr.responseText;
//     }
//   };
//   xhr.open("GET", "index.html", true);
//   xhr.send();
// };