
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
                    <th>Name</th>
                    <th>Flag</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Subregion<th>
                </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
                    <td>${element.name.common}</td>
                    <td>${element.flag}</td>
                    <td>${element.capital}</td>
                    <td>${element.region}</td>
                    <td>${element.subregion}</td>
                </tr>`
    });

    tblCountries.innerHTML=tblBody;
})



// https://restcountries.com/v3.1/name/{name}


function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
   let name = document.getElementById("name")
   let capital = document.getElementById("capital")
   let region = document.getElementById("region")
   let img =  document.getElementById("img")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            officialName.innerText = obj.name.official;
            name.innerText = obj.name.common;
            capital.innerHTML = obj.capital;
            region.innerHTML = obj.region;
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);    
    })
}