import { forwardRef } from 'react';

interface CheckboxProps {
  name: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => (
  <div className="checkbox">
    <input type="checkbox" ref={ref} id={props.name} name={props.name} value={props.name} />
    <p>{props.name}</p>
  </div>
));
