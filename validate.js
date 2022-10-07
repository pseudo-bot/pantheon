const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//validate phone
const validatePhone = (phone) => {
  let re = /^[0-9]{10}$/;
  return re.test(phone) && phone >= 1000000000;
};
//validate name
const validateName = (name) => {
  let re = /^[A-Za-z ]+$/;
  return re.test(name) && name && name.length >= 3;
};
// validate college
const validateCollege = (name) => {
  let re = /^[A-Za-z ]+$/;
  return re.test(name) && name && name.length >= 2;
};

export { validateEmail, validatePhone, validateName, validateCollege };
