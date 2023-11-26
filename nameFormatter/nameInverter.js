/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
const nameInverter = function(name) {
 
  if (name === '' || name === 'Dr.') {
    return '';
  }
  
  if (name !== '') {
    const newName = name.split(' ');
    if (newName.length === 1) {
      return newName[0];
    }
    if (newName[1] !== '') {
      let fullName = (newName[1] + ' ' + newName[0]);

      return fullName;

    } else {
      return newName[0];
    }
    
  }

};

module.exports = nameInverter;