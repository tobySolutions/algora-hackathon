function validation(schema) {
  return async (req, res, next) => {
    const { error } = await schema.validate(req.body);
    if (error){
      res.status(400).json({
        status: 400,
        error: error.message
      });
    }

    next();
  }

}

module.exports = validation;