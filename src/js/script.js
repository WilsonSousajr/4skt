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