let cards=document.querySelectorAll('.card')
let backCards=document.querySelectorAll('.backCard')
let cardsLeft=cards.length/2;
let cardCounter=[]
let change=document.getElementById('changeStyle')
change.current='lightMode'
let playAgain=document.getElementById('playAgain')
let possibleArea=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']
let control=0
shuffleCards()

cards.forEach(e=>{
	e.turned='no'
	e.addEventListener('click',()=>{
		
	if (e.turned=='no' && cardCounter.length<2){
	e.classList+=' flipY';
	e.turned='yes'	
	cardCounter.push(e);
	compare()
	}
	})
})

function flip(x){
	if (x.turned=='no'){
	x.classList+=' flipY';
	x.turned='yes'	
	cardCounter.push(x);
	compare()
	}
	else{
	
	}
}



function compare(){
 	if (cardCounter.length==2){
	 if(cardCounter[0].dataset.name==cardCounter[1].dataset.name){
		cardsLeft--;
		 setTimeout(()=>{

		 cardCounter[0].classList+=' flipX'
		 cardCounter[0].turned='no'
		 cardCounter[1].classList+=' flipX';
		 cardCounter[1].turned='no'
		 cardCounter=[]
		 victory()
		},1000)
	 }
	 else{
		 setTimeout(()=>{
			cardCounter[0].classList.remove('flipY')
			cardCounter[0].turned='no'
			cardCounter[1].classList.remove('flipY')
			cardCounter[1].turned='no'
			cardCounter=[]
			},1000)	
		}
	}

}



function victory(){
	if (cardsLeft==0){
		//change this 
		alert('Win')
	}
}

function changeCssStyle(){
	if (change.current=='lightMode'){
	document.head.getElementsByTagName('link')[0].href='./css/dark_style.css'
	change.current='darkMode'
	}
	else{
		document.head.getElementsByTagName('link')[0].href='./css/style.css'
		change.current='lightMode'
	}
}

function restart(){
	cardsLeft=4;
	cards.forEach((e)=>{
		e.classList.remove('flipY');
		e.classList.remove('flipX');

		e.turned='no'
	})
	possibleArea=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']
	shuffleCards()
}

change.addEventListener('click',changeCssStyle)
playAgain.addEventListener('click',restart)


function shuffleCards(){
	cards.forEach((e)=>{
		let i=Math.ceil(Math.random()*10);
		if (i>=possibleArea.length){
			i=0
		}
		;
		control++
		e.style.gridArea=possibleArea[i];
		possibleArea.splice(i,1)
	})
}
