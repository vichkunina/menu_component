# burger-menu

    npm run start

---

Основная компонента Menu. На текущий момент на вход прнимает:

* __size__ - желаемый размер меню. Тип передаваемого значения - строка. Доступные значения: 'full', 'half'. На данный момент этот параметр важен тлько для десктопной версии компоненты, мобильная версия всегда 85%. На десктопе по умолчанию full.
```js
    const size = 'full'

    <Menu size={size} />
```

* __navLinks__ - массив объектов, которые содержат в себе заголовок пункта меню и ссылку для этого заголовка. navLinks - Это основной навигационной блок.
```js
    const navLinks = [
        {
            href: 'home',
            title: 'home',
        },
        {
            href: 'SCHEDULE',
            title: 'SCHEDULE',
        }
    ]

    <Menu navLinks={navLinks} />
```

* __sections__ - массив объектов, каждый из которых хранит в себе title и content. Title - объект, хранящий в себе name и href - информацию о заголовке текущего блока и ссылке заголовка соответственно. В content передается компонент для рендеринга в тек блоке. sections - это набор дополнительных блоков (отличных от навигации и футера)
```js

    const component = (
        <div>какой-то контент</div>
    )

    const sections = [
        {
            title: {
                name: 'ABOUT',
                href: 'href'
            },
            content: component1
        },
    ]

    <Menu sections={sections} />
```

* __footer__ - объект, который хранит в себе поле content для компоненты footer.

```js

    const footerComponent = (
        <div>Follow us</div>
    )

    const footer = {
      content: footerComponent,
    }

    <Menu footer={footer} />
```
* __logo__ - объект, который хранит в себе поле content для компоненты logo.
```js

    const logoComponent = (
        <img src="" width='50' height='50' src="./logo.png"/>
    )

    const logo = {
        content: logoComponent
    }

    <Menu logo={logo} />
```

---

Пример передаваемых значений живет в stubs.jsx
В App.js монтируется компонента Menu