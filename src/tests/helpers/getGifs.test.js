import { getGifs } from '../../helpers/getGifs';

describe('Pruebas al helper getGifs', () => {

  test('Debe de traer 10 elementos', async () => {

    const gifs = await getGifs('pepsi');

    expect(gifs.length).toBe(10);

  });

  test('Debe de traer 0 elementos al no enviar una categoria', async () => {

    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);

  })

})
