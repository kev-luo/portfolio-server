module.exports.validateMessage = (name, email, body) => {
  const errors = {};
  if (name.trim() === "") {
    errors.name = "Please include your name";
  }
  if (email.trim() === "") {
    errors.email = "Please include your email";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (body.trim() === "") {
    errors.body = "Message must not be empty";
  }
};
