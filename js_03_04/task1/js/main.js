var test = {
    title: 'Тест по программированию',
    questions: [
        {
            questionText: 'Вопрос №1',
            answers: [
                {answerText: 'Вариант ответа №1'},
                {answerText: 'Вариант ответа №2'},
                {answerText: 'Вариант ответа №3'}
            ]
        },
        {
            questionText: 'Вопрос №2',
            answers: [
                {answerText: 'Вариант ответа №1'},
                {answerText: 'Вариант ответа №2'},
                {answerText: 'Вариант ответа №3'}
            ]
        },
        {
            questionText: 'Вопрос №3',
            answers: [
                {answerText: 'Вариант ответа №1'},
                {answerText: 'Вариант ответа №2'},
                {answerText: 'Вариант ответа №3'}
            ]
        }
    ],

    render: function(questionsList) {
        for (var i = 0; i < this.questions.length; i++) {
            var answerList = this.addQuestion(this.questions[i].questionText, questionsList);
            for (var j = 0; j < this.questions[i].answers.length; j++) {
                this.addAnwsers(this.questions[i].answers[j].answerText, answerList, i+1, j+1); 
            }
        }
    },

    initPage: function() {
        var containerElement    = this.createElementAffter(document.body, 'div', 'container');
        var titleElement        = this.createElementAffter(containerElement, 'h2', 'text-center', test.title);
        var formElement         = this.createElementAffter(containerElement, 'form', 'test-form');
            formElement.method  = 'post';
            formElement.action  = 'index.html';
        var questionsList       = this.createElementAffter(formElement, 'ol', 'questions');
        var submitButton        = this.createElementAffter(formElement, 'button', 'btn btn-default', 'Проверить мои результаты');
            submitButton.type   = 'submit';

        return questionsList;
    },

    addQuestion: function(questionText, questionsList) {
        
        var questionItem = this.createElementAffter(questionsList, 'li', 'question__item')
        var questionTitle = this.createElementAffter(questionItem, 'p', 'question__title', questionText)
        var answerList = this.createElementAffter(questionItem, 'ul', 'answers list-unstyled')

        return answerList;
    },

    addAnwsers: function(answerText, answersList, quesNum, answNum) {
        this.createElementAffter(answersList, 'li', 'answer__item',
            '<div class="checkbox">' +
            '   <label class="answer__title">' +
            '   <input type="checkbox" name="question' + quesNum + '" value="answer' + answNum + '">' +
                    answerText +
            '   </label>' +
            '</div>'
        );
    },

    createElementAffter: function(parentElement, tagName, className, text) {
        var element = document.createElement(tagName);
        element.className = className;

        if (text !== undefined) {
            element.innerHTML = text;
        }
        
        parentElement.appendChild(element);

        return element;
    }
};



// 
// run app
// 
var questionsList = test.initPage();
test.render(questionsList);







