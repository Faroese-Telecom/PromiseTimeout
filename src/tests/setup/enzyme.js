// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import configure from "@commercetools/enzyme-extensions";
// import ShallowWrapper from "enzyme/ShallowWrapper";

//Enzyme.configure({ adapter: new Adapter() });
//configure(ShallowWrapper);

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
