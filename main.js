userData = document.querySelectorAll('.user_data input')// Получаем элементы из div с классом user_data
/* itemUserName = document.querySelector(".first_name"); // Получаем элемент с именем
itemUserSurname = document.querySelector(".sur_name"); // Получаем элемент с фамилией */
itemCheckbox = document.querySelectorAll(`input[type="checkbox"]`); // Получаем все чекбоксы
itemAmount = document.querySelectorAll(`input[type="number"]`); // Получаем все элементы с колличеством товара
items = document.querySelector(".items");// Все объекты внутри div с классом items
btnElement = document.querySelector(".btn") // Получаем элемент кнопки
totalSum = document.querySelector(".total_sum");//Элемент span где будет выводиться итоговая сумма
allData = document.querySelector(".container");




//Усложнение - при активном чекбоксе 1 , при снятии 0 
for (let item of itemCheckbox) {
    item.addEventListener('click', function() { //При клике
        if (item.checked) item.parentNode.lastElementChild.value = 1; //Если чекбокс выбран то значение последнего элемента (в данном случае iput с колличеством товара , значение станет - 1 )
        else item.parentNode.lastElementChild.value = 0; //В случае если чекбокс неактивен  значение input (последнего элемента) - 0
    })
}

/* items.addEventListener(`keyup`, function(){ //При клике на элементы в меню
    let sum = 0;                                       //Введём переменную ссуммы
    for (let x = 0; x < itemCheckbox.length; x++) if (itemCheckbox[x].checked) sum += itemAmount[x].value * itemCheckbox[x].value;
    totalSum.innerHTML = `Итог: ${sum}р.`;
}) */

btnElement.addEventListener(`click`, function() { // При клике на кнопку
	alert(`Заказчик: ${userData[0].value} ${userData[1].value} \n${totalSum.innerHTML}`); //\n - начать с новой строки Вызывается модальное окно со следующими объектами - Имя, Фамилия, Итоговая стоимость. 
	})
	
var event_list = ["click", "scroll","mousemove","keydown","keyup"]; // Клик или прокрутка элемента
event_list.forEach(function(event) {
  
	document.querySelector(".container").addEventListener(event, function() { // Применяем к элементу с class="element"
		let sum = 0;                                       //Введём переменную ссуммы
    for (let x = 0; x < itemCheckbox.length; x++) if (itemCheckbox[x].checked) sum += itemAmount[x].value * itemCheckbox[x].value;
    totalSum.innerHTML = `Итог: ${sum}р.`;

	});
  
});
