/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.jpeg';

// declare module '*.scss';
// declare module '*.module.scss' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }

// types.d.ts
declare module '*.module.scss' {
  const content: { [className: string]: string };
  export = content;
}
