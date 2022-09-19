"use strict";
(function () {
	//создаем и возвращаем заголовок================
	function createAddTitle(title) {
		let appTitle = document.createElement("h2");
		appTitle.innerHTML = title;
		appTitle.classList.add("title");
		return appTitle;
	}

	//создаем и возвращаем форму для создания дел==============
	function createTodoItemForm() {
		let form = document.createElement("form");
		let input = document.createElement("input");
		let buttonWrapper = document.createElement("div");
		let button = document.createElement("button");

		form.classList.add("input-group", "mb-3");
		input.classList.add("form-control");
		input.placeholder = "Введите новое дело";
		buttonWrapper.classList.add("input-group-append");
		button.classList.add("btn", "btn-primary");
		button.textContent = "Добавить дело";

		buttonWrapper.append(button);
		form.append(input);
		form.append(buttonWrapper);

		return {
			form,
			input,
			button,
		};
	}

	//создаем и возвращаем список - ul - элементов=============
	function createTodoList() {
		let list = document.createElement("ul");
		list.classList.add("list-group");
		return list;
	}

	//создаем и возвращаем item - li - =============
	function createTodoItem(name) {
		let item = document.createElement("li");
		//помещаем кнопки в элемент в группу
		let buttonGroup = document.createElement("div");
		let doneButton = document.createElement("button");
		let deleteButton = document.createElement("button");

		//устанавливаем стили для элементов списка===============
		item.classList.add(
			"list-group-item",
			"d-flex",
			"justify-content-between",
			"align-items-center",
			"mb-3"
		);
		item.textContent = name;
		//стили для кнопок==============
		buttonGroup.classList.add("btn-group", "btn-group-sm");
		doneButton.classList.add("btn", "btn-success");
		doneButton.textContent = "Готово";
		deleteButton.classList.add("btn", "btn-danger");
		deleteButton.textContent = "Удалить";
		//вкладываем кнопки в отдельный элемент объединяем ==============
		buttonGroup.append(doneButton);
		buttonGroup.append(deleteButton);
		item.append(buttonGroup);
		//возвращаем все, так как нужен доступ к элементам для событий
		return {
			item,
			doneButton,
			deleteButton,
		};
	}

	// добавлем все на страницу=================
	document.addEventListener("DOMContentLoaded", function () {
		let container = document.getElementById("todo-add");
		let todoAddTitle = createAddTitle("Список дел");
		let todoItemForm = createTodoItemForm();
		let todoList = createTodoList();

		container.append(todoAddTitle);
		container.append(todoItemForm.form);
		container.append(todoList);

		//===================================================================
		todoItemForm.form.addEventListener("submit", function (el) {
			el.preventDefault();

			if (!todoItemForm.input.value) {
				return;
			}
			todoList.append(createTodoItem(todoItemForm.input.value).item);
			todoItemForm.input.value = "";
		});
	});
})();
