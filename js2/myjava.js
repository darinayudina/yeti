function readMore(){// створюємо змінні
	var finish= document.getElementById('finish'); 
	var more=document.getElementById('more');
	var detal=document.getElementById('detal');

	if(finish.style.display === 'none') {//перевіряємо наші точки, якщо точки стриті то..
	 	finish.style.display="inline"; //показати точки
		detal.innerHTML="Детальніше"; //вказати текст
		more.style.display="none";
	}
	else{
		finish.style.display="none";
		detal.innerHTML="Згорнути";
		more.style.display="inline";
	}
}