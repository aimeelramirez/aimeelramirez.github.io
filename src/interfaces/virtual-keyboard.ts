export interface VirtualKeyboardProps {
  onChange: (input: string) => void;
  keyboardRef: (ref: any) => void;
  keypress: (ref: KeyboardEvent) => void;
}
