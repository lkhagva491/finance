// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  return {
    publicaAdd: function () {},
  };
})();
// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. оруулах өгөгдлөө олж авах
    //2. өгөгдлөө санхүүгийн контроллерт дамжуулна
    //3. өгөгдлүүдийг вэбэд тохирох хэсэгт гаргана
    //4. төсвийг тооцоолно
    //5. эцсийн үлдэгдлийг дэлгэцэнд гаргана
  };
  document.querySelector(".add__btn").addEventListener("click", function () {});

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 32) {
    }
    console.log(event);
  });
})(uiController, financeController);
