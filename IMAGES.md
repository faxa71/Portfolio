# Как добавить фотографии

Сайт уже настроен так, что если положить файл с правильным именем в нужную
папку — картинка появится на сайте сама, без правки кода. Пока файла нет,
на её месте виден полупрозрачный плейсхолдер с подписью.

## Как экспортировать картинку из Figma

1. Перейдите по ссылке ниже — она открывает Figma и сразу выделяет нужный слой.
2. В правой панели Figma найдите раздел **Export** (внизу панели свойств
   выделенного слоя). Если раздела нет — нажмите **+** рядом с "Export".
3. Формат — **JPG** (для фото) или **PNG** (если нужна прозрачность),
   масштаб — **2x** (чтобы картинка не была размытой на больших экранах).
4. Нажмите **Export** [имя слоя], сохраните файл.
5. Переименуйте скачанный файл ровно так, как указано в колонке "Файл"
   ниже, и положите в указанную папку проекта.

## Главная страница — блок "Нравиться" (6 фото)

Папка: `public/images/home/`

| Слой в Figma | Ссылка | Файл |
|---|---|---|
| image 5 (большое фото сверху) | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=374-623) | `mood-1.jpg` |
| telegram-cloud...y 1 | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=400-2470) | `mood-2.jpg` |
| telegram-cloud...y 2 | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=400-2472) | `mood-3.jpg` |
| telegram-cloud...w 1 (высокое, слева) | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=400-2488) | `mood-4.jpg` |
| telegram-cloud...w 1 (верхнее справа) | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=400-2494) | `mood-5.jpg` |
| Снимок экрана — 2026-09-14 | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=400-2498) | `mood-6.jpg` |

## Кейс Webimzo (6 фото)

Папка: `public/images/webimzo/`

| Где на странице | Ссылка | Файл |
|---|---|---|
| Хиро-картинка (сразу после таблицы Роль/Масштаб/Год/Результат) | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=398-1783) | `hero.jpg` |
| После раздела "О проекте" | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=398-1788) | `o-proekte.jpg` |
| После раздела "Задача и контекст" | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=398-1793) | `zadacha.jpg` |
| После раздела "Погружение в предметную область" | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=398-1799) | `pogruzhenie.jpg` |
| После раздела "Анализ существующего решения" | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=398-1804) | `analiz.jpg` |
| Внутри раздела "Взаимодействие с командой" | [открыть в Figma](https://www.figma.com/design/OXfDc7yEqkj5KM84guC2lY/Portfolio-website?node-id=398-1809) | `komanda.jpg` |

## Проверка

После того как положите файлы — просто обновите страницу в браузере
(`Ctrl+Shift+R` / `Cmd+Shift+R`, чтобы сбросить кэш). Перезапускать
`npm run dev` не нужно, статичные файлы из `public/` подхватываются сразу.

Остальные 6 кейсов (Webslot, Splay, Idrok, Nexora, Tez Shifo, Intersoft) пока
не собраны как страницы — когда дойдём до них, добавлю сюда такую же таблицу
для их картинок.
