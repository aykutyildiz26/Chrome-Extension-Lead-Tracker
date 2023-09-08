let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let oldLeads = []
/*
myLeads = JSON.parse(myLeads)
myLeads.push("www.linkedin.com")
console.log(myLeads)
//console.log(typeof myLeads)
*/

const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const deleteBtn = document.querySelector("#delete-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    
    console.log( localStorage.getItem("myLeads") )
})

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
    console.log(localStorage)

})


        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)



        /* 
                listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        
        */