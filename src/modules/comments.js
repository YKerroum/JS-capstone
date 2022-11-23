import { getData } from './likes.js'
const comment = () => {
  const ids = ['item1', 'item2', 'item3'];
  ids.forEach((id) => {
    getData(`comments?item_id=${id}`).then((result) => { console.log(result); });
  });
}
