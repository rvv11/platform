// Получаем элементы
const dataSpan = document.querySelector(".data");
const editButton = document.querySelector(".edit-button");
const saveButton = document.querySelector(".save-button");
const cancelButton = document.querySelector(".cancel-button");

let isEditing = false;
let originalValue = "";

// Функция для включения режима редактирования
function enableEdit() {
    if (!isEditing) {
        isEditing = true;
        originalValue = dataSpan.textContent; // Сохраняем оригинальное значение
        dataSpan.contentEditable = true;
        dataSpan.style.border = "1px solid #ccc";
        editButton.style.display = "none";
        saveButton.style.display = "inline-block";
        cancelButton.style.display = "inline-block";
    }
}

// Функция для сохранения изменений
function saveEdit() {
    if (isEditing) {
        isEditing = false;
        dataSpan.contentEditable = false;
        dataSpan.style.border = "none";
        editButton.style.display = "inline-block";
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        // Вместо этой строки  новое значение 
        console.log("Сохранено новое значение: " + dataSpan.textContent);
    }
}

// Функция для отмены изменений
function cancelEdit() {
    if (isEditing) {
        isEditing = false;
        dataSpan.textContent = originalValue; // Восстанавливаем оригинальное значение
        dataSpan.contentEditable = false;
        dataSpan.style.border = "none";
        editButton.style.display = "inline-block";
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
    }
}
