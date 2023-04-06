import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();
  let nanoId = nanoid();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id || nanoId}>
              <p>
                <span>{name} : </span>
                {number}
              </p>
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
