import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];

export  const DropdownComp = () => {
  const defaultOption = options[0];
  return(
    <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
  )
}
