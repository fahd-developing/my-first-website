function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        document.getElementById("message").innerHTML =
            "تم تسجيل الدخول بنجاح!";

    } else {

        document.getElementById("message").innerHTML =
            "اسم المستخدم أو كلمة المرور غير صحيحة.";

    }
}
