declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.jpeg';
// declare module '*.scss';

// types.d.ts
declare module '*.module.scss' {
  const content: { [className: string]: string };
  export = content;
}
