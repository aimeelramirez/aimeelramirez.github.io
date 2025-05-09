import { type FC } from 'react';
// import VirtualKeyboard from './virtual-keyboard/VirtualKeyboard';
import Desk from './desk/Desk';
import './room.css';

const Room: FC = () => {
//   const [input, setInput] = useState('');
//   const keyboardRef = useRef<any>(null);
//   const [keys] = useState<string[]>([]);
//     setInput(input);
//   };
//   const handleKeyboardChange = (input: string) => {

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setInput(value);
//     keyboardRef.current?.setInput(value);
//   };

//   // 🔑 Highlight virtual key on real key press
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       const key = e.key.toLowerCase(); ///lowercasing the Backspace etc.
//       if (key === ' ') {
//         //for mouse input
//         keyboardRef.current?.setActiveButton('{space}');
//       }if (key == 'backspace'){
//         //short way to delete last index
//         keys.pop();
//         setInput(keys.join(''));
//       } if (key != 'backspace'){
//         //if not regardless
//         keys.push(key.toString());
//         setInput(keys.join(''));
//         keyboardRef.current?.setActiveButton(key);
//       }
//     };

//     const handleKeyUp = () => {
//       keyboardRef.current?.clearButton();
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('keyup', handleKeyUp);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

  return (
    <div className="room-container">
    {/* <h2 className="neon-title">Aimee's Project Portfolio </h2> */}

      <div className="desk-area">
        <Desk/>
        {/* <input
          className="retro-input"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type here..."
        /> */}
        {/* Todo:  applying for the modal as if someone was sending mail
        <VirtualKeyboard
           keypress={()=>{console.log()} }
          onChange={handleKeyboardChange}
          keyboardRef={(ref) => (keyboardRef.current = ref)}
        /> */}
      </div>
      
    </div>
  );
};

export default Room;
