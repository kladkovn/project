// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const Test = require('../class/test')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву контейнера
    name: 'index',
    // вказуємо назву компонентів
    component: ['heading', 'header', 'footer'],

    // вказуємо назву сторінки
    title: 'create options',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      test: new Test().test,
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/create-account', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('create-account', {
    // вказуємо назву контейнера
    name: 'create-account',
    // вказуємо назву компонентів
    component: ['heading', 'header', 'footer'],

    // вказуємо назву сторінки
    title: 'create account',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/create-login', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('create-login', {
    // вказуємо назву контейнера
    name: 'create-login',
    // вказуємо назву компонентів
    component: ['heading','header', 'footer'],

    // вказуємо назву сторінки
    title: 'create login',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/recovery', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('recovery', {
    // вказуємо назву контейнера
    name: 'recovery',
    // вказуємо назву компонентів
    component: ['heading','header', 'footer'],

    // вказуємо назву сторінки
    title: 'recovery',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/type-account', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('type-account', {
    // вказуємо назву контейнера
    name: 'type-account',
    // вказуємо назву компонентів
    component: ['heading', 'header', 'footer'],

    // вказуємо назву сторінки
    title: 'type-account',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/contact-form', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('contact-form', {
    // вказуємо назву контейнера
    name: 'contact-form',
    // вказуємо назву компонентів
    component: ['heading','header','footer'],

    // вказуємо назву сторінки
    title: 'contact-form',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/contact-save', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('contact-save', {
    // вказуємо назву контейнера
    name: 'contact-save',
    // вказуємо назву компонентів
    component: ['heading','header', 'footer'],

    // вказуємо назву сторінки
    title: 'contact-save',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/org-about', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('org-about', {
    // вказуємо назву контейнера
    name: 'org-about',
    // вказуємо назву компонентів
    component: ['heading','header', 'footer'],

    // вказуємо назву сторінки
    title: 'org-about',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/org-about-data', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('org-about-data', {
    // вказуємо назву контейнера
    name: 'org-about-data',
    // вказуємо назву компонентів
    component: ['heading','header', 'footer'],

    // вказуємо назву сторінки
    title: 'org-about-data',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/org-address', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('org-address', {
    // вказуємо назву контейнера
    name: 'org-address',
    // вказуємо назву компонентів
    component: ['heading','header', 'footer'],

    // вказуємо назву сторінки
    title: 'org-address',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})
// Підключаємо роутер до бек-енду
module.exports = router
