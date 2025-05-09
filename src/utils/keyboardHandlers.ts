type KeyboardHandlersParams = {
  keys: string[];
  setInput: (val: string) => void;
  keyboardRef: React.MutableRefObject<any>;
};

const mapToVirtualKey = (key: string): string => {
  switch (key) {
    case ' ': return '{space}';
    case 'backspace': return '{backspace}';
    case 'enter': return '{enter}';
    default: return key.length === 1 ? key.toLowerCase() : '';
  }
};

export const createKeyboardHandlers = ({
  keys,
  setInput,
  keyboardRef,
}: KeyboardHandlersParams) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    const virtualKey = mapToVirtualKey(key);
    if (!virtualKey) return;

    if (virtualKey === '{backspace}') {
      keys.pop();
    } else {
      keys.push(key);
    }

    setInput(keys.join(''));
    keyboardRef.current?.setActiveButton(virtualKey);
  };

  const handleKeyUp = () => {
    keyboardRef.current?.clearButton();
  };

  return { handleKeyDown, handleKeyUp };
};
