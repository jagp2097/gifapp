import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas al componente GifGridItem', () => {

  const title = 'Title';
  const url = "https://ptm.com/image.png";

  const wrapper = shallow(<GifGridItem 
    title={ title }
    url={ url }/>
  );

  test('Mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de tener un parrafo con el title', () => {

    const parrafo = wrapper.find('p');

    expect(parrafo.text().trim()).toBe(title);

  });

  test('Debe de tener la imagen igual al url y el alt de los props', () => {

    const img = wrapper.find('img');

    expect( img.props().src ).toBe(url);

    expect( img.prop('alt') ).toBe(title);

  });

  test('Debe de tener la clase animate__fadeIn', () => {

    const div = wrapper.find('div');

    console.log(div.props().className);

    expect( div.prop('className').includes('animate__fadeIn') ).toBe(true);

  });


});
