import axios from 'axios';

const KEY = "18953015-07ab6e07958b18192a80798da"

const fetchImage = (search, page = 1) => {
  const Url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(Url).then(res => {
    return res.data;
  });
};
export default fetchImage