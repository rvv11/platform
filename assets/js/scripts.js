document.addEventListener("DOMContentLoaded", function() {
    const avatars = document.querySelectorAll(".avatar");

    avatars.forEach(avatar => {
        avatar.addEventListener("click", function() {
            // Убираем класс selected у всех аватаров
            avatars.forEach(a => a.classList.remove("selected"));

            // Добавляем класс selected только к выбранному аватару
            avatar.classList.add("selected");
        });
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const avatars = document.querySelectorAll(".avatar");
    const chooseButton = document.querySelector(".choose-button");
    const skipButton = document.querySelector(".skip-button");

    avatars.forEach(avatar => {
        avatar.addEventListener("click", function() {
            avatars.forEach(a => a.classList.remove("selected"));
            avatar.classList.add("selected");
        });
    });

    if (chooseButton) {
        chooseButton.addEventListener("click", function() {
            const selectedAvatar = document.querySelector(".avatar.selected img");
            if (selectedAvatar) {
                // Получить путь к изображению выбранного аватара
                const avatarSrc = selectedAvatar.getAttribute("src");

                // Ваш код для перенаправления на страницу с использованием
                // адреса электронной почты и логина
                // window.location.href = "путь_к_странице?email=ваш_емайл&login=ваш_логин";
            }
        });
    }

    if (skipButton) {
        skipButton.addEventListener("click", function() {
            // Ваш код для перенаправления на другую страницу
            // window.location.href = "путь_к_другой_странице";
        });
    }
});










// Получаем элементы кнопки и значения, если они существуют на странице
const editLoginButton = document.getElementById("edit-login-button");
const loginValue = document.getElementById("login-value");

// Проверяем, существуют ли элементы
if (editLoginButton && loginValue) {
    // Добавляем обработчик события
    editLoginButton.addEventListener("click", function () {
        // Здесь можно показать форму для изменения логина и обработать сохранение данных в БД
        const newLogin = prompt("Введите новый логин:");

        if (newLogin !== null) {
            // Проверяем, чтобы новый логин не был пустым
            if (newLogin.trim() !== "") {
                // Обновляем значение на странице
                loginValue.textContent = newLogin;
            } else {
                alert("Логин не может быть пустым.");
            }
        }
    });
}



const editLanguageButton = document.getElementById("edit-language-button");
const languageSelect = document.getElementById("language-select");

editLanguageButton.addEventListener("click", function () {
    // Получаем выбранный язык
    const selectedLanguage = languageSelect.value;
    
    // Здесь можно отправить выбранный язык на сервер для обновления языка на всех страницах
    // и обновления интерфейса
    alert("Выбран язык: " + selectedLanguage);
});












