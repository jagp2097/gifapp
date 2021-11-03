import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas al componente <GifExpertApp>', () => {

  test('Mostrar el componente correctamente', () => {

    const wrapper = shallow(<GifExpertApp/>);

    expect(wrapper).toMatchSnapshot();

  });

  test('debe de mostrar una lista de categorias', () => {

    const categories = ['Dragon Ball', 'Captain Tsubasa'];

    const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />)

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  });

});


