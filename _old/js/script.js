var data = [["Agus", "Sakti"],["Mantap ini tempat asik banget dan murah banget... recomended lah pokoknya", "Sekian banyak tempat yang ku kunjungi hanya disini dan hanya kamu yang bisa membuatku nyaman karena kenyamananku merupakan ekspresi dari kenyamanan dompetku hehe"]]
ambil();
function ambil(){
    for(i = 0; i < data[0].length ; i++){
        var cn = document.createElement("li");
        var ck = cn.innerHTML = "<div>"+data[0][i]+"</div><p>"+data[1][i]+"</p>";
        document.getElementById("post-komen").appendChild(cn);

    }
}

function kirim(){
    var isikomen = document.getElementById("komen").value;
    var namako = document.getElementById("name").value;
    document.getElementById("post-komen").innerHTML="";
    data[0].push(namako);
    data[1].push(isikomen);
    document.getElementById("komen").value="";
    document.getElementById("name").value="";
    ambil();
}

new Vue({
    el: '#rekomendasi',
    data: {
      show: false
    }
})

new Vue({
    el: '#populer',
    data: {
      show: false
    }
})
