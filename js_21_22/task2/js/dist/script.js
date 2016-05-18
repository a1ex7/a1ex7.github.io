'use strict';

// First part make on vanila JS

var quiz = JSON.parse(localStorage.getItem('quiz'));

var body = document.getElementsByTagName('body')[0];
var startButton = document.getElementById('start-btn');

startButton.addEventListener('click', function () {
    return renderTest();
});

function renderTest() {
    var tmpl = _.template(document.getElementById('quiz-template').innerHTML);
    var result = tmpl(quiz);
    body.innerHTML += result;
};

// Second part make on jQuery

$(function () {

    $('body').on('click', '#check-btn', function (event) {
        event.preventDefault();
        var tmpl = _.template($('#modal-template').html());
        var quizResult = checkAnswers();
        var resultHTML = tmpl(quizResult);
        $('body').append(resultHTML);
        $('.modal-wrapper').fadeIn(400);
    });

    $('body').on('click', '.modal-close, .button-close', function () {
        $('.quiz-modal').animate({ opacity: 0, top: '45%' }, 200, function () {
            $(undefined).remove();
            $('.modal-wrapper').fadeOut(400, function () {
                $(undefined).remove();
            });
        });
        $('.test-form input:checkbox').prop('checked', false);
    });

    function checkAnswers() {

        // All answers checkbox have "id" like "qXaY" where X - index of questions and Y - index of answers

        var incorrectQuestionsCount = 0;
        var incorrectAnswersCount = 0;

        // Динамически формируем объект, следующего вида. В котором будет храниться итог теста и
        // список выбранных ответов к вопросам с пометкой верно или не верно.
        //
        // quizResult = {
        //     resume: 'К сожалению, Вы не прошли тест',
        //     questions: [
        //         {
        //             questionText: 'Вопрос 1',
        //             checkedAnswers: [
        //                 {
        //                     answerText: 'Ответ 2',
        //                     isRight: true
        //                 }, ...
        //             ]
        //         }, ...
        //     ]
        // };

        var quizResult = {
            resume: 'Здесь будет результат теста',
            questions: []
        };

        var questions = quiz.questions;
        for (var i = 0; i < questions.length; i++) {

            quizResult.questions[i] = { questionText: '', checkedAnswers: [] };
            quizResult.questions[i].questionText = questions[i].questionText;

            var answers = questions[i].answers;
            for (var j = 0; j < answers.length; j++) {

                var isCheckedAnswers = $('#q' + i + 'a' + j).prop('checked');
                var isCorrectAnswer = answers[j].isCorrect;

                // Каждый отмеченный ответ заносим в результаты и проверяем правильный ли он
                if (isCheckedAnswers) {
                    quizResult.questions[i].checkedAnswers.push({
                        answerText: answers[j].answerText,
                        isRight: isCorrectAnswer
                    });
                }

                // Считаем количество неправильных ответов на вопрос (отмечен неверный либо неотмечен верный)
                if (isCheckedAnswers !== isCorrectAnswer) {
                    incorrectAnswersCount++;
                }
            }

            // Если есть хотя бы один неправильный ответ, считаем вопрос не отвеченным
            if (incorrectAnswersCount > 0) {
                incorrectQuestionsCount++;
                incorrectAnswersCount = 0;
            }
        }

        // Если есть хотя бы один не отвеченный вопрос, считаем тест не пройденным
        if (incorrectQuestionsCount > 0) {
            quizResult.resume = 'К сожалению, Вы не прошли тест';
        } else {
            quizResult.resume = 'Поздравляем, Вы прошли тест';
        }

        return quizResult;
    }
});