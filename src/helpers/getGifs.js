export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=QPByoxmLhhYuYBLgZhK21ETSi60btLTX`;
  const response = await fetch(URL);
  const { data } = await response.json();

  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    };
  });

  return gifs;
};