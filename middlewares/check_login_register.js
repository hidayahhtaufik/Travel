const checkLoginRegister = (req, res, next) => {

  if (req.session.email) {
    res.redirect('/menu/search')
  } else {
    next()
  }

}

module.exports = checkLoginRegister;
