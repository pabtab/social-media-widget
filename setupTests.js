import Enzyme from 'enzyme';
import EnzymeAdapter from "enzyme-adapter-react-16";
import 'isomorphic-fetch';

Enzyme.configure({ 
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});