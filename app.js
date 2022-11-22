let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

ul.addEventListener('click',function(e){
	if(e.target.tagName === 'BUTTON'){
		e.target.parentElement.remove();
	}
	else if(e.target.tagName === 'LI'){
		e.target.classList.toggle('finished')
	}
})

form.addEventListener('submit',function(e){
	e.preventDefault()
	let li = document.createElement('li')
	let removeBtn = document.createElement('button') 
	li.innerText = input.value + ' '
	removeBtn.innerText = 'X'
	removeBtn.style.color = 'white'
	removeBtn.style.backgroundColor = 'red'
	input.value = ''
	ul.appendChild(li)
	li.appendChild(removeBtn)
})

