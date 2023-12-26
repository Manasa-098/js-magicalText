const input = document.getElementById('input')
const output = document.getElementById('output')

function capital() {
    if (input.value == "") {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = 'plzz enter the prompt inside input field!!!⚠️';
        output.appendChild(paragraph)
        paragraph.style.color = 'red'
        paragraph.style.fontWeight = 'bold'

    }
    else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        output.appendChild(paragraph)
        paragraph.classList.add('capital')

    }
}

function lower() {
    if (input.value == "") {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = 'plzz enter the prompt inside input field!!!⚠️';
        output.appendChild(paragraph)
        paragraph.style.color = 'red'
        paragraph.style.fontWeight = 'bold'

    }
    else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        output.appendChild(paragraph)
        paragraph.classList.add('lower')

    }



}
function sentence() {
    if (input.value == "") {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = 'plzz enter the prompt inside input field!!!⚠️';
        output.appendChild(paragraph)
        paragraph.style.color = 'red'
        paragraph.style.fontWeight = 'bold'

    }
    else {

        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        output.appendChild(paragraph)
        paragraph.classList.add('sentence')

    }


}
function bolder() {
    if (input.value == "") {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        paragraph.innerText = 'plzz enter the prompt inside input field!!!⚠️';
        output.appendChild(paragraph)
        paragraph.style.color = 'red'
        paragraph.style.fontWeight = 'bold'

    }
    else {

        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        output.appendChild(paragraph)
        paragraph.classList.add('bolder')
    }


}
function italic() {

    if (input.value == "") {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = 'plzz enter the prompt inside input field!!!⚠️';
        output.appendChild(paragraph)
        paragraph.style.color = 'red'
        paragraph.style.fontWeight = 'bold'

    }
    else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        output.appendChild(paragraph)
        paragraph.classList.add('italic')

    }



}
function underline() {

    if (input.value == "") {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = 'plzz enter the prompt inside input field!!!⚠️';
        output.appendChild(paragraph)
        paragraph.style.color = 'red'
        paragraph.style.fontWeight = 'bold'

    }
    else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerText = input.value
        output.appendChild(paragraph)
        paragraph.classList.add('underline')

    }


}