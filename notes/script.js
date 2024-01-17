async function get_data(){
  var res=await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
  var result=await res.json();
  console.log(result)
  for(var i=0;i<result.length;i++){
   var name=result[i].name;
   var latlng=result[i].latlng
   var capitaldta=result[i].capital
   opendata(name,...latlng,capitaldta);

  }
}


async function opendata(name,lat,lon,capitaldta){
  try{
    if(lat==undefined){
       throw new Error("Invalid lat long values")
  }
  var openres=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=882986886f0a2e04e7e2e73b39ed2bf3`)
  var final=await openres.json();
  // console.log(`Name:${name},Capital:${capitaldta},lat:${lat},logitude${lon}`)
 var temp=final.main.temp
// console.log(temp)
  foo(name,temp,capitaldta)
}catch(error){
  console.log("data lost"+error.message)
}
}

get_data()

var container=document.createElement("div")
container.className="container"
var row=document.createElement("div")
row.className="row"

 function foo(name,temp,capitaldta){
    console.log("the arguments are"+name,temp,capitaldta)
 
 
   for(var i=0;i<name.length;i++){
        var col=document.createElement("div")
        col.className="col-md-4"
        col.innerHTML+=
        ` <div class="card">
       
        <div class="card-body">
          <p class="card-text" style="font-style":"bold">Country Name:${name}</p>
          <p class="card-text"><small class="text-muted">Temperature:${temp}</small></p>
          <p class="card-text"><small class="text-muted">Capital:${capitaldta}</small></p>
        </div>`
      row.append(col)
      container.append(row)
      document.body.append(container)
    } 
  }  
   
 

























/*var f1=fetch("https://restcountries.com/v3.1/all ")
var res=f1.then((data)=>data.json()).then((data1)=>foo(data1))


var container=document.createElement("div")
container.className="container"
var row=document.createElement("div")
row.className="row"

 function foo(data1){
    console.log(data1)
    for(var i=0;i<data1.length;i++){
        var col=document.createElement("div")
        col.className="col-md-4"
        col.innerHTML+=
        ` <div class="card">
        <img src=${data1[i].flags.png} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text" style="font-style":"bold">Country Name:${data1[i].name.common}</p>
          <p class="card-text"><small class="text-muted">Capital:${data1[i].capital}</small></p>
        </div>`
      row.append(col)
      container.append(row)
      document.body.append(container)
    }   
   
 }*/


 /*function delay(num){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>reslove(2*num),3000)
    })
}
delay(4).then((data)=>{
    console.log(data)
    return delay (data)
}).then((data1)=>{
    console.log(data1)
}).then((data2)=>console.log(data2)).catch((error)=>console.log(error))
/*function getData(){
  return new Promise((resolve,reject)=>setTimeout(()=>resolve("this is rejected after 3 sec"),4000))
}
async function foo(){
  try{
    var res=await getData()
    console.log(res)

  }catch(error){
    console.log(error)

  }
}
foo()*/