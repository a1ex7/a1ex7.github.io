// First part make on vanila JS

const quiz = JSON.parse(localStorage.getItem('quiz'));

let body = document.getElementsByTagName('body')[0];
let startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => renderTest() );


function renderTest() {
    let tmpl = _.template(document.getElementById('quiz-template').innerHTML);
    let result = tmpl(quiz);
    body.innerHTML += result;
};



// Second part make on jQuery

$( () => {

    $('body').on('click', '#check-btn', (event) => {
        event.preventDefault();
        let tmpl = _.template( $('#modal-template').html() );
        let quizResult = checkAnswers();
        let resultHTML = tmpl(quizResult);
        $('body').append(resultHTML);
        $('.modal-wrapper').fadeIn(400);
    });

    $('body').on('click', '.modal-close, .button-close', () => {
        $('.quiz-modal').animate({opacity: 0, top: '45%'}, 200, () => {
            $(this).remove();
            $('.modal-wrapper').fadeOut(400, () => {
                $(this).remove();
            });
        });
        $('.test-form input:checkbox').prop('checked', false);
    });

    
    function checkAnswers() {

        // All answers checkbox have "id" like "qXaY" where X - index of questions and Y - index of answers
        
        let [incorrectQuestionsCount, incorrectAnswersCount] = [0, 0];

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
        let quizResult = {
            resume: 'Здесь будет результат теста',
            questions: []
        };

        let questions = quiz.questions;
        for (let i = 0; i < questions.length; i++) {
            
            quizResult.questions[i] = {questionText: '', checkedAnswers: []}
            quizResult.questions[i].questionText = questions[i].questionText;
            
            let answers = questions[i].answers;
            for (let j = 0; j < answers.length; j++) {
                
                let isCheckedAnswers = $(`#q${i}a${j}`).prop('checked');
                let isCorrectAnswer = answers[j].isCorrect;
                
                // Каждый отмеченный ответ заносим в результаты и проверяем правильный ли он
                if (isCheckedAnswers) {
                    (quizResult.questions[i].checkedAnswers)
                        .push({
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