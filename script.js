const button = document.getElementById('button')
const wrap = document.getElementById('wrap')
const alert = document.getElementById('alert')
const butNo = document.getElementById('butNo')
const butYes = document.getElementById('butYes')
const wrapTrollBut = document.getElementById('wrapTrollBut')
const trollBut = document.getElementById('trollBut')
const trollBut2 = document.getElementById('trollBut2')
const p = document.getElementById('p')
const que = document.getElementById('que')
let counter

console.log(button)

button.addEventListener('click', ()=>{
	console.log('1')
	wrap.style.opacity = '1'
	wrap.style.pointerEvents = 'all'
	button.style.display = 'none'
})

butNo.addEventListener('mouseover', ()=>{
	butNo.style.transition = '0s'
	butNo.style.opacity = '0'
	butNo.style.pointerEvents = 'none'
	trollBut.style.opacity = '1'
	trollBut.style.left = `300px`
	trollBut.style.top = '60px'
})

butYes.addEventListener('mousedown', ()=>{
	butYes.style.transition = '0s'
	butYes.style.opacity = '0'
	butYes.style.pointerEvents = 'none'
	trollBut2.style.opacity = '1'

	trollBut2.style.left = `0px`
	trollBut2.style.top = '60px'
	que.innerHTML='охуел палиться?	'
})


trollBut.addEventListener('mouseenter', (e)=>{
	let [X, Y]  = [e.clientX, e.clientY]
	console.log(trollBut.width)
	function changeButton() {

		let coord = trollBut.getBoundingClientRect()
		let left = Math.random()*Math.abs(alert.clientWidth-coord.width)
		let top = Math.random()*Math.abs(alert.clientHeight-coord.height)
		// console.log(e.clientX, e.clientY)
		
		trollBut.style.left = `${left}px`
		trollBut.style.top = `${top}px`
		setTimeout(()=>{
		let coord = trollBut.getBoundingClientRect()

		if (X > coord.left && X < coord.left+coord.width && Y > coord.top && Y < coord.top+coord.height){
			console.log('тута',coord.left, X, coord.left+coord.width)
			changeButton()
		}	
		}, 5)
		counter++

	}
	changeButton()
})


trollBut2.addEventListener('mousedown', (e)=>{
	let [X, Y]  = [e.clientX, e.clientY]
	console.log(trollBut2.width)
	function changeButton() {

		let coord = trollBut2.getBoundingClientRect()
		let left = Math.random()*Math.abs(alert.clientWidth-coord.width)
		let top = Math.random()*Math.abs(alert.clientHeight-coord.height)
		// console.log(e.clientX, e.clientY)
		
		trollBut2.style.left = `${left}px`
		trollBut2.style.top = `${top}px`
		setTimeout(()=>{
		let coord = trollBut.getBoundingClientRect()

		if (X > coord.left && X < coord.left+coord.width && Y > coord.top && Y < coord.top+coord.height){
			console.log('тута',coord.left, X, coord.left+coord.width)
			changeButton()
		}	
		}, 5)
		counter++

	}
	changeButton()
})