// const { user } = require("firebase-functions/lib/providers/auth");

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

  const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };

  exports.validateSignupData = (data) => {
    //Validation checks
    let errors = {};

    if (isEmpty(data.email)) {
      errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
      return res
        .status(500)
        .json({ error: "Must enter a valid email address" });
    }

    if (isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and password confirmation do not match" });
    }
    if (isEmpty(data.handle)) errors.handle = "Must not be empty"

      return {
          errors,
          valid: Object.keys(errors).length === 0 ? true : false
      }
  }

  exports.validateLoginData = (data) => {
    let errors = {};
    if (isEmpty(data.email)) errors.email = "Must not be empty";
    if (isEmpty(data.password)) errors.password = "Must not be empty";

    // if (Object.keys(errors).length > 0) return res.status(400).json(errors);

     return {
       errors,
       valid: Object.keys(errors).length === 0 ? true : false,
     };

  }

  exports.reduceUserDetails = (data) => {
    let userDetails = {}
    if(!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if(!isEmpty(data.age)) userDetails.age = data.age
    if(!isEmpty(data.website.trim())){
      //adds https:// to user website
      if(data.website.trim().substring(0, 4) !== "http"){
        userDetails.website = `http://${data.website.trim()}`
      } else userDetails.website = data.website
    }
    if(!isEmpty(data.location.trim())) userDetails.location = data.location;
    return userDetails
  }