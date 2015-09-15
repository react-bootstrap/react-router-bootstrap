import 'es5-shim';

const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
