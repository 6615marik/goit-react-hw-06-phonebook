import { useDispatch } from 'react-redux';
import { setContactFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
export const Filtr = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  // console.log(filter);
  const filtrValue = e => {
    console.log(e.target.value);
    dispatch(setContactFilter(e.target.value));
  };
  return (
    <>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={filtrValue} />
    </>
  );
};
