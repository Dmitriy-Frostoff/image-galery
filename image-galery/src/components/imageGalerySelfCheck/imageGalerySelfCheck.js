console.log(`
Привет!) Детальное описание и самопроверка внизу. 

Из готовых фич: 
 - полностью адаптивный дизайн (device width от 375px до 1920px (и выше))
 - обработка пустого запроса (попробуй ;) )
 - динамичекое изменение количества изображений (пока что - видно только при смене: пустой запрос от пользователя <=> пользователь ввёл данные)

 TODO фич внизу...

**ТЗ** https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-5.md

            **Форма для проверки** 
https://rolling-scopes-school.github.io/checklist/


**Ваша оценка - 70 баллов** 

#### Отзыв по пунктам ТЗ:

#####**Выполненные пункты:**
=====================================================
1) на странице есть несколько фото и строка поиска

2) в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс

3) При загрузке приложения на странице отображаются полученные от API изображения

4) Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API

5) при открытии приложения курсор находится в поле ввода

6) есть placeholder

7) автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами)

8) поисковый запрос можно отправить нажатием клавиши Enter

9) после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода

10) в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder

11) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения

  стэк: webpack 5, html, css/scss, vanilla JS

  features:
- [x] улучшенный дизайн (+ есть favicon)
- [x] адаптация для устройств с device width от 375px до 1920px (и выше)
- [x] поиск по клику на лупу в поле ввода
- [x] обработка пустого ввода в поиск
- [x] динамическая обработка количества изображений при помощи JS (пока до 16 max на странице)

  TODO!
- [] автоподгрузка изображений при скролле вниз (либо добавить кнопку для загрузки изображений)
- [] добавить пагинацию при клике на изображение
- [] добавить возможность перелистывания изображений по кликам влево - вправо при открытом окне пагинации с картинкой
- [] добавить возможность кэширования запросов (получения URL от unspash server)
`)