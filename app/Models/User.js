'use strict'

const Model = use('Model')

class User extends Model {

  static boot () {
    super.boot()

    /**
     * A hook to bash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', 'User.hashPassword')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token', '_id', 'userId')
  }
}

module.exports = User
