$(document).ready(function () {
        $('#send-answer').on('click', myQuiz);
        $('footer').load('footer.html');
});

function myQuiz() {
    // answ1 = $('#q1').val();
      $.post(
        //куда
        'quiz.php',
        //что
        {
            'userName': $('#user-name').val(),
            'userAge': $('#user-age').val(),
            'q1': $('#q1').val(),
            'q2': $('#q2').val()
        },
        //и что потом
        ifSuccess
    );
}

function ifSuccess(data) {
    //все данные от сервера передаются в виде строки в переменную data
    $('#server-answer').html(data);
}

$.getJSON('prim.json',function (data) {
    console.log(data);
})