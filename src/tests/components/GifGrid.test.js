import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// finge una llamada al archivo y controlar la info con la que va a responder
jest.mock('../../hooks/useFetchGifs'); 

describe('Pruebas al componente <GifGrid />', () => {

  const category = 'pepsi';

  test('Debe de mostrarse correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={ category }/>);

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'test'
    },
    {
      id: 'DES',
      url: 'https://localhost/cualquier/DSE.jpg',
      title: 'test2'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={ category }/>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('p').exists()).toBe(false);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  });

});



