/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
export const preventSubmitFunction = function(e) {
  console.log('aaa');
  if (e.keyCode === 13) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

export const formatDate = function formatDate(date) {
  let d = date.getUTCDate().toString(); // getUTCDate() returns 1 - 31
  let m = (date.getUTCMonth() + 1).toString(); // getUTCMonth() returns 0 - 11
  const y = date.getUTCFullYear().toString(); // getUTCFullYear() returns a 4-digit year

  let formatted = '';

  if (d.length === 1) {
    // pad to two digits if needed
    d = `0${d}`;
  }
  if (m.length === 1) {
    // pad to two digits if needed
    m = `0${m}`;
  }
  formatted = `${y}-${m}-${d}`; // concatenate for output

  return formatted;
};
