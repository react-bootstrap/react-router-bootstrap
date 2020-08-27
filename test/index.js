/* test/enzyme.js */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jasmineEnzyme from 'jasmine-enzyme';

// Configure Enzyme for the appropriate React adapter
Enzyme.configure({ adapter: new Adapter() });

// Initialize global helpers
beforeEach(() => {
  jasmineEnzyme();
});

// Re-export all enzyme exports
export * from 'enzyme';

const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
