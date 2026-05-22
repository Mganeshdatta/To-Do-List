let d = document.getElementById("tl");
let completed=JSON.parse(localStorage.getItem("completed")) || [];
let pend=JSON.parse(localStorage.getItem("pend")) || [];
let store = JSON.parse(localStorage.getItem("store")) || [];

function funnn(){
    let ddd=document.getElementById("one");
    if(completed.length==0){
        alert("No tasks are completed");
    }else{
    for(let n of completed){
        console.log(n);
        let p11 = document.createElement("p");
        let br = document.createElement("br");
        p11.innerText=n;
        ddd.append(p11);
        ddd.append(br);
    }
}
}
function funnn1(){
    let ddd1=document.getElementById("two");
    if(pend.length==0){
        alert("No tasks are completed");
    }else{
    for(let n1 of pend){
        let p112 = document.createElement("p");
        let br1 = document.createElement("br");
        p112.innerText=n1;
        ddd1.append(p112);
        ddd1.append(br1);
    }
}
}

function newtd(){
    localStorage.removeItem("pend");
    localStorage.removeItem("completed");
}
function history(){
    if(store.length==0){
        alert("No Task was Stored");
    }
    else{
    let h = document.getElementById("history");
    for(let k of store){
        let ph = document.createElement("p");
        let brh = document.createElement("br");
        ph.innerText=k;
        h.append(ph);
        h.append(brh);
    }
}
}
function chistory(){
    localStorage.removeItem("store");
}
function fun2(p,div,b1,b2,b3){
    let v = p.innerText;
    p.remove()
    b1.remove()
    b2.remove()
    b3.remove()
    let ta = document.createElement("textarea");
    ta.innerText=v;
    ta.style.width="70%";
    div.append(ta);
    let b = document.createElement("button");
    b.innerText="OK";
    div.append(b);
    d.append(div);
    b.onclick=(()=>{
        p.innerText=ta.value;
        ta.remove();
        b.remove();
        div.append(p,b1,b2,b3);
    })
}
function pending(){
    window.open("pending.html");
}
function fun3(div,p){
    pend = pend.filter(v=>v!=p.innerText);
    localStorage.setItem("pend",JSON.stringify(pend));
    div.remove();
}
function fun4(p,div){
    pend = pend.filter(v=>v!=p.innerText);
    completed.push(p.innerText);
    localStorage.setItem("completed",JSON.stringify(completed));
    div.remove()
}
function fun(){
    let task = document.getElementById("task").value;
    if(task==""){
        alert("Enter the Task");
    }
    else{
    let div = document.createElement("div");
    let p = document.createElement("p");
    let b1 = document.createElement("button");
    let b2 = document.createElement("button");
    let b3 = document.createElement("button");
    div.style.border="2px solid black";
    p.innerText=task;
    pend.push(task);
    store.push(task);
    localStorage.setItem("pend",JSON.stringify(pend));
    localStorage.setItem("store",JSON.stringify(store));
    b1.innerText="Modify";
    b2.innerText="Delete";
    b3.innerText="Completed";
    div.style.width="33.1%";
    div.append(p);
    div.append(b1,b2,b3);
    d.append(div);
    b1.onclick=(()=>{
        fun2(p,div,b1,b2,b3);
    });
    b2.onclick=(()=>{
        fun3(div,p);
    });
    b3.onclick=(()=>{
        fun4(p,div);
    });
}
}