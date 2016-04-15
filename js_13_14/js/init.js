'use strict;'

var data = {
    title: 'Тест по Java Script',
    questions: [
        {
            questionText: 'Вопрос №1',
            answers: [
                {
                    answerText: 'Вариант ответа №1 (правильный)',
                    isCorrect:  true
                },
                {
                    answerText: 'Вариант ответа №2 (правильный)',
                    isCorrect:  true
                },
                {
                    answerText: 'Вариант ответа №3',
                    isCorrect:  false
                }
            ]
        },
        {
            questionText: 'Вопрос №2',
            answers: [
                {
                    answerText: 'Вариант ответа №1',
                    isCorrect:  false
                },
                {
                    answerText: 'Вариант ответа №2 (правильный)',
                    isCorrect:  true
                },
                {
                    answerText: 'Вариант ответа №3',
                    isCorrect:  false
                }
            ]
        },
        {
            questionText: 'Вопрос №3',
            answers: [
                {
                    answerText: 'Вариант ответа №1',
                    isCorrect:  false
                },
                {
                    answerText: 'Вариант ответа №2 (правильный)',
                    isCorrect:  true
                },
            ]
        }
    ]
};

localStorage.setItem('quiz', JSON.stringify(data));