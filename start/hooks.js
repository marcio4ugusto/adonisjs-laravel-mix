'use strict'

const {hooks} = require('@adonisjs/ignitor')
const path = require('path')

/*
|--------------------------------------------------------------------------
| Laravel mix hook
|--------------------------------------------------------------------------
|
| This hook adds the `mix()` - versioning  - function of laravel to adonis views.
| See more about Adonis views hooks at:
| https://adonisjs.com/docs/4.0/views#_extending_views
| See more about Laravel mix at:
| https://laravel.com/docs/5.5/mix
|
*/

hooks.after.providersBooted(() => {
  const View = use('Adonis/Src/View')
  const Helpers = use('Helpers')

  View.global('mix', text => {
    if (!text) return
    const manifest = require(path.join(Helpers.publicPath(), 'mix-manifest.json'))
    return manifest[text]
  })
})
