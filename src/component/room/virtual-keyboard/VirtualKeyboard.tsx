import React, { type FC} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import type { VirtualKeyboardProps } from '../../../interfaces/virtual-keyboard';

const VirtualKeyboard: FC<VirtualKeyboardProps> = ({ onChange }) => {
  return (
    <Keyboard
      onChange={onChange}
      layout={{
        default: [
          'q w e r t y u i o p',
          'a s d f g h j k l',
          'z x c v b n m',
          '{space}',
        ],
      }}
    />
  );
};

export default VirtualKeyboard;
