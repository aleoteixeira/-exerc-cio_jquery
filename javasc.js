$(document).ready(function () {
  $("#form-tarefa").submit(function (e) {
    e.preventDefault();
    var taskName = $("#Adiciona-task").val();
    if (taskName.trim() !== "") {
      $("#lista-tarefa").append("<li>" + taskName + "</li>");
      $("#Adiciona-task").val("");
    }
  });

  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});
