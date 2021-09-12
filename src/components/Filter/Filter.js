import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsActions } from 'redux/contacts';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const change = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={change}
        type="text"
        name="name"
        className={s.input}
      />
    </label>
  );
};

export default Filter;
