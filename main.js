    //const tytul = document.getElementById("formGroupExampleInput 1").value
    //const autor = document.getElementById("formGroupExampleInputAutor").value

    //const hr0=document.getElementsByTagName("hr")
    const hr0=document.querySelectorAll("hr")
    const hr=document.getElementById("hr1")
    const hr2=document.getElementById("hr2")
    const hr3=document.getElementById("hr3")

    const parTytul = document.getElementById("input1")
    const parAutor = document.getElementById("input2")
    const parOpis = document.getElementById("input3")

    //const divCount = document.createElement("div")
    //const button = document.createElement("button")
    const button = document.getElementById("btn")
    
    button.addEventListener("click", inf)
    
function inf (){ 
   const tytul = document.getElementById("formGroupExampleInput 1").value
   const autor = document.getElementById("formGroupExampleInputAutor").value
   const opis = document.getElementById("formGroupExampleInputOpis").value
    const count = tytul.replace(/ /g, "").length
    const count2 = autor.replace(/ /g, "").length
    const count3 = opis.replace(/ /g, "").length
    parTytul.innerHTML=count+" / 50"
    parAutor.innerHTML=count2+" / 50"
    parOpis.innerHTML=count3+" / 100"
    if (count>50){
        //(hr&&parTytul).style.color ="red"
        hr.style.color ="red"
        parTytul.style.color ="red"
    }
     if(count2>50){
        hr2.style.color ="red"
        parAutor.style.color ="red"
    }
    if(count3>100){
        hr3.style.color ="red"
        parOpis.style.color ="red"
    }
}

    /**/
    //hr.style.color ="cadetblue"
    //hr.style.height = "5px"
    //console.log(hr0)
    //hr0[1].style.height = "5px"
    //hr0[2].style.height = "5px"

    for (var i=0; i<hr0.length; i++){
        hr0[i].style.height = "5px"
        hr0[i].style.color ="cadetblue"
    }

    button.innerHTML="ZAPISZ"
    button.style.color ="white"
    button.style.backgroundColor ="cadetblue"
    button.style.borderRadius ="3px"
    button.style.textAlign ="right"
    
    //document.body.appendChild(divCount)
    //divCount.appendChild(button)
    
    




