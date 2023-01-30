// Active menu links
const links = document.querySelectorAll(".header-menu a")

function activeLink(link){
	const url = location.href;
	const href = link.href;

	if(url.includes(href)){
		link.classList.add('active')
	}
}

links.forEach(activeLink)

// Active budget items

const parameters = new URLSearchParams(location.search)

function activeProduct(parameter){
	const element = document.querySelector(`#${parameter}`)
	if(element){
		element.checked = true
	}
}


parameters.forEach(activeProduct)

// Toggle questions

const questions = document.querySelectorAll('.questions button')

function activeQuestion(event){
	const question = event.currentTarget;
	const controls = question.getAttribute('aria-controls')
	const answer = document.querySelector(`#${controls}`)
	const active = answer.classList.contains('activated')

	answer.classList.toggle('activated')
	question.setAttribute('aria-expanded', active)
}

function eventQuestions(question){
	question.addEventListener("click", activeQuestion)
}

questions.forEach(eventQuestions)