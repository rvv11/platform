// Подождем, пока документ полностью загрузится
document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы формы и кнопки
    var emailInput = document.getElementById("email");
    var loginInput = document.getElementById("login");
    var passwordInput = document.getElementById("password");
    var signupButton = document.getElementById("signupButton");

    // Функция для проверки заполненности полей и активации кнопки
    function checkFields() {
        var email = emailInput.value;
        var login = loginInput.value;
        var password = passwordInput.value;

        if (email !== "" && login !== "" && password !== "") {
            signupButton.removeAttribute("disabled");
        } else {
            signupButton.setAttribute("disabled", "disabled");
        }
    }

    // Вызываем функцию checkFields при загрузке страницы
    checkFields();

    
});
