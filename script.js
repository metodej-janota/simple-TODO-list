let list = document.getElementById("list");
let list2 = document.getElementById("list2");
let input = document.getElementById("input")
let input2 = document.getElementById("input2")

function submit() {
    let li = document.createElement("li")
    let check = document.createElement("input")
    let div = document.createElement("div")

    if(input.value.length < 4){
        alert("invalid input")
        console.warn("invalid input")
        return
    } else if(input.value.length == null){
        alert("error")
        console.warn("invalid input")
        return
    } else if(input.value.length > 20){
        alert("invalid input")
        console.warn("invalid input")
        return
    } 

    Object.assign(check, {
        type: "checkbox",
        onclick: function () {  
            let text = li.innerText
            let li2 = document.createElement("li")
            let check2 = document.createElement("input")
            let div2 = document.createElement("div")

            Object.assign(check2, {
                type: "checkbox",
                checked: "true",
                onclick: function () {
                    check2.checked = true
                }
            })

            div2.className = "divos";
            div2.appendChild(check2)
            li2.appendChild(div2)

            li2.appendChild(document.createTextNode(text))
            list2.appendChild(li2)
            li.remove();
        }
    })

    div.className = "divos";
    div.appendChild(check)
    div.style.display = "inline"

    li.appendChild(div)
    li.appendChild(document.createTextNode(input.value))

    list.appendChild(li)
    li.style.display = "inline-block"

    input.value = ""

    if(input2.value.length >= 1){
        let newList = document.createElement("ul")
        let newLi = document.createElement("li")
        let newDiv = document.createElement("div")

        newDiv.className = "divos";
        newList.setAttribute("id", "swag");
        newDiv.style.display = "inline"

        newList.style.padding = "0px"
        newLi.style.border = "none"
        newLi.style.padding = "0px"
        newLi.style.marginBottom = "0px"
        newLi.style.paddingTop = "5px"
        newLi.style.backgroundColor = "transparent"
        newLi.style.fontSize = "13px"
        newLi.style.opacity = "60%"
    
        li.appendChild(newList)
        newList.appendChild(newDiv)
        div.appendChild(newLi)
        newDiv.appendChild(document.createTextNode("🍆"))
        newLi.appendChild(newDiv)
        newLi.appendChild(document.createTextNode(input2.value))
        newList.appendChild(newLi)

        input2.value = ""
    }
}

addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submit()
    }
});

function deleteAll() {
    list.innerHTML = ""
}

function deleteAll2() {
    list2.innerHTML = ""
}