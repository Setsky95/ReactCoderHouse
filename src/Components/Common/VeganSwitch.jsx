import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { PiPlant } from 'react-icons/Pi';


const VeganSwitch = () => {
  return (
    <div>
      <PiPlant/>
    <Switch {...label} defaultChecked />

    </div>
    )
}

export default VeganSwitch