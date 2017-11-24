'use strict'

class WelcomeController {

  async index ({view}) {
    return view.render('welcome')
  }

}

module.exports = WelcomeController
