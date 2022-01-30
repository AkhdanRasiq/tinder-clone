import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() });
