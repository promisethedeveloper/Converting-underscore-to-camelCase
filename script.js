const convertToCamelCase = function (variableNames) {

  // convert all input parameters to lower case
  let smallCapVariableNames = variableNames.toLowerCase();
  // convert all variables (strings) to array by calling the split method
  let variableArray = smallCapVariableNames.split('_');
  // Use destructuring to get the second input of the array elements
  const [firstVariable, secondVariable] = variableArray;
  // convert the second input of the array elements to upper case
  let correctedVariable = secondVariable.toUpperCase();
  // create a string of the first array element with the second input of the array element
  let finalAnswer = firstVariable + correctedVariable;
  console.log(finalAnswer);
};

convertToCamelCase('A_B')
convertToCamelCase('underscore_case');
convertToCamelCase('first_name');
convertToCamelCase('delayed_departure');




