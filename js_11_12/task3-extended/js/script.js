var tmpl = _.template(document.getElementById('user-template').innerHTML);

var data = {
    user: {
        name: 'Tsinya Alexey Nikolaevich',
        role: 'Администратор интернет-магазина',
        avatar: 'img/info-photo.jpg',
    },
    contacts: {
        phone: '+38(050)222-22-22',
        social: 'http://vk.com',
    },
    skills: [{
        text: 'Это поможет мне в работе',
    },{
        text: 'Это современная и востребованная специализация',
    },{
        text: 'Хочется выйти за рамки привычного пространства',
    }],
    feedback: {
        text: 'Надеюсь что курсы GoIT помогут мне в достижении всех поставленных целей',
    },
};

var result = tmpl(data);
document.write( result );