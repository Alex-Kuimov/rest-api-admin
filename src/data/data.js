export const data = {
    messages: {
        title: 'Сообщения',
        instance: 'messages',
        fields: {
            text: {
                label: 'Текст',
                name: 'text',
                type: 'textarea',
                placeholder: 'Введите текст',
                value: ''
            },
            users: {
                label: 'Пользователи',
                name: 'users',
                type: 'text',
                placeholder: 'Введите chat id',
                value: ''
            }
        }
    },
    tasks : {
        title: 'Задачи',
        instance: 'tasks',
        fields: {
            text: {
                label: 'Текст',
                name: 'text',
                type: 'textarea',
                placeholder: 'Введите текст',
                value: ''
            },
        }
    },
    books : {
        title: 'Книги',
        instance: 'books',
        fields: {
            text: {
                label: 'Описание',
                name: 'text',
                type: 'textarea',
                placeholder: 'Введите текст',
                value: ''
            },
            id: {
                label: 'ID',
                name: 'id',
                type: 'text',
                placeholder: 'Введите ID книги',
                value: ''
            }
        }
    },
    articles : {
        title: 'Статьи',
        instance: 'articles',
        fields: {
            subtitle: {
                label: 'subtitle',
                name: 'subtitle',
                type: 'text',
                placeholder: 'Введите',
                value: ''
            },
            text: {
                label: 'Текст',
                name: 'text',
                type: 'textarea',
                placeholder: 'Введите текст',
                value: ''
            },
        }
    },
    options: {
        title: 'Настройки',
        instance: 'options',
        fields: {
        }
    },
}