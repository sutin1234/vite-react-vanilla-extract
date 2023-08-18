import { style as _style, globalStyle as cls } from '@vanilla-extract/css';

export const styles = _style({
  backgroundColor: 'darkcyan',
  color: 'white',
  padding: '1rem 3rem',
  borderRadius: '0.5rem',
  border: 'none',
});

cls('.btn', {
  backgroundColor: 'blue',
});
