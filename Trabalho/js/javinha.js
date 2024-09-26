function Acessar(){
    var nome = document.
    getElementById("cxnome").value;

    var n1=document.
    getElementById("Nota1").value;

    var n2=document.
    getElementById("Nota2").value;

    var n3=document.
    getElementById("Nota3").value;

    var faltas= parseInt(document.
    getElementById("Faltas").value );

    alert("Seu nome é "+nome);

    var media= (parseFloat(n1)+
                parseFloat(n2)+
                parseFloat(n3) ) / 3;

    document.getElementById
    ("media"). value = media;

    if(media >=7 && faltas
         <= 20){
        document.getElementById
        ("Situacao").value = "Aprovado";
    }else{
        document.getElementById
        ("Situacao").value = "Reprovado";



    }

} 

