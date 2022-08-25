function validation(schema) {
  return async (req, res, next) => {
    try{
      const {error} = await schema.validate(req.body);
      if (error) {
        res.status(400).json({
          status: 400,
          error: error.message
        });
      }

      next();
    }catch (err){
      console.log(err);
      res.status(500).json({
        status: 500,
        message: "An error occurred."
      });
    }
  }

}

module.exports = validation;