import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('Pruebas al componente <AddCategory />', () => {

  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

  beforeEach( () => {
    jest.clearAllMocks();
    
    wrapper = shallow(<AddCategory setCategories={ setCategories } />);

  });

  test('debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de cambiar el input text', () => {

    const input = wrapper.find('input');

    const inputValue = 'Test';

    input.simulate('change', { target: { value: inputValue } });

    expect(wrapper.find('p').text().trim()).toBe(inputValue);

  });

  test('No debe se debe de subir el formulario', () => {

    const form = wrapper.find('form');
    
    form.simulate('submit', { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();

  });

  test('Debe de llamar el setCategories y limpiar el input text', () => {

    //  1. simular el inputchange
    const input = wrapper.find('input');

    const inputValue = 'Test input text';

    input.simulate('change', { target: { value: inputValue } });

    //  2. simular el submit
    const form = wrapper.find('form');

    form.simulate('submit', { preventDefault: () => {} });

    //  3. setCategories se debe de haber llamado
    // expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) ); // se espera que el argumento sea una fn
    
    //  4. el valor del input debe de estar ''
    expect(input.prop('value')).toBe('');
    // expect(input.text().trim()).toBe('');

  });


});

