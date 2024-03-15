# Input Plugin for Tailwind CSS

Предоставляет классы для создания текстовых полей, включая эффекты при наведении, фокусе

## Установка

```bash
npm install @qpokychuk/tailwind-input-plugin --save-dev
```

```js
// tailwind.config.js
{    
  plugins: [
    require('@qpokychuk/tailwind-input-plugin'),
  ],
}
```
## Основа использования

Добавьте обязательный класс `input`, затем добавьте дополнительные классы для настройки отображения

```html
<input type="text" class="input" />
```

## Установка цвета поля

Управляйте цветом поля с помощью утилит `input-{color}` (color - цвета вашей темы).

```html
<input class="input input-indigo ..." />
<input class="input input-blue ..." />
<input class="input input-red ..." />
```

Если вам нужно использовать одноразовое значение `color`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

```html
<input class="input input-[#B33771] ..." />
```

![Screenshot_1](https://github.com/qp0kycHuk/tailwind-input-plugin/assets/42573149/dbc4bce7-ae83-4577-85f8-462903e4a48f)


## Установка размера поля

Управляйте размером поля с помощью утилит `input-{inputSize}`.

```html
<input class="input input-xs ..." />
<input class="input input-sm ..." />
<input class="input input-base ..." /> <!-- Вариант по умолчанию -->
<input class="input input-lg ..." />
<input class="input input-xl ..." />
<input class="input input-2xl ..." />
```

Если вам нужно использовать одноразовое значение `inputSize`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

```html
<input class="input input-[50px] ..." />
```

![Screenshot_2](https://github.com/qp0kycHuk/tailwind-input-plugin/assets/42573149/7ba90f3e-0f98-4a08-90df-58911d7c70d9)


## Установка закругления поля

Управляйте закруглением поля с помощью утилит `rounded` из tailwind.

```html
<input class="input ..." />
<input class="input rounded ..." />
<input class="input rounded-xl ..." />
<input class="input rounded-full ..." />
```

![Screenshot_3](https://github.com/qp0kycHuk/tailwind-input-plugin/assets/42573149/705874d8-bd5d-4d2d-8a57-ac3591d4d310)


## Настройка вашей темы

По умолчанию плагин предоставляет размеры поля, вы можете их расширить

```js
// tailwind.config.js
{
  theme: {
    inputSize: {
      xs: '28px',
      sm: '32px',
      base: '42px',
      lg: '48px',
      xl: '56px',
      ['2xl']: '64px',
    },
  }
}
```


## Конфигурация

Вы можете настроить плагин с помощью опций
Используйте вызов плагина с объектом конфигурации:
```js
// tailwind.config.js
{    
  plugins: [
    require('@qpokychuk/tailwind-input-plugin')({
      className: 'input',
      disabledOpacity: 0.6,
      border: "1px solid theme('colors.black / 40%')",
      baseCss: {},

      focusStyle: {
        borderColor: 'var(--tw-input-color)',
        boxShadow: '0 0 0 1px var(--tw-input-color)',
        zIndex: 2,
      },
      hoverStyle: {
        borderColor: 'var(--tw-input-color)',
        zIndex: 2,
      },
    }),
  ],
}
```

| Параметр | Значение по умолчанию | Описание |
|---|---|---|
| className | `'input'` | Базовый класс для поля. Вы можете использовать свой, например `'ui-input'`, тогда ваши классы будут выглядеть так: `ui-input ui-input-indigo ui-input-xl ...` |
| disabledOpacity | `0.6` | Определяет непрозрачность неактивного поля  |
| border | `1px solid theme('colors.black / 40%')` | Обводка по умолчанию используется `color.black` - если вы не переопределяете этот параметр в вашей теме должен быть цвет `black` |
| baseCss | `{}` | Дополнительные бызовые стили |
| focusStyle | См. выше | Переопределит стили поля в фокусе |
| hoverStyle | См. выше | Переопределит стили поля при наведении |


[Поддержать автора](https://www.tinkoff.ru/rm/yuferov.sergey18/NC17C11734)
