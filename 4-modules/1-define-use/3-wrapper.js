// Node wraps modules into functions like so:

// function (exports, module, require, __filename, __dirname){

// console.log(arguments);

exports.a = 42;
module.exports.b = 37;

// exports = () => {}; will not work, breaks assignment reference

module.exports = () => {}; // this does work because module.exports is what is being returned

//  return module.exports;
// } (module.exports)
