# vb-userscript
Greasemonkey usersrcipt for vBulletin

Скрипт для расширения функционала форума на движке vBulletin версии 4.2.3+

Легенда:
- Планируется.
+ Реализованно.

Фичи:
- Автоподгрузка треда ajax'ом. Загрузка треда целиком.
- Сохранение тредов в json и localstorage
- Если на пост есть ответы выводить внизу поста ссылку ">номер_ответа". Например >42253112
- Ответы и заголовок цитирования преобразовывать в ссылку вида ">>номер_на_который_дан_ответ"
- Автозамена символа ">" на цитирование при ответе 
- При наведении курсора на ссылки с номером поста показывать его содержание
- Автоматическое уменьшение длинных цитат до приемлемых размеров
- Возможность скрыть, отделить и подписать всю ветку с ответами на какой-либо пост
- Кнопка "Вызов в тред". При нажатии выбранный пользователь получает ЛС с ссылкой на тред. 
- Возможность скрыть не нужных пользователей бесследно
- Добавление подписей пользователям
- Опциональное скрытие дополнительной информации о пользователе в колонке слева
- Опциональное скрытие некоторых подписей (для уменьшения размера поста)
- Автообновление треда
- Сохранение и загрузка настроек из дневника