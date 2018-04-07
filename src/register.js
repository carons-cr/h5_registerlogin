window.onload = function () {
    var accountId = document.getElementById("accountId");
    var passwordConfirmation = document.getElementById("passwordConfirmation");
    var notice = document.getElementsByClassName("notice");

    accountId.onfocus = function () {
        notice[0].style.display = "block";
    }

    accountId.onblur = function () {
        notice[0].style.display = "none";
    }

    passwordConfirmation.onfocus = function () {
        notice[1].style.display = "block";
    }

    passwordConfirmation.onblur = function () {
        notice[1].style.display = "none";
    }
}

