/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg?react' {
  import type { FunctionComponent, SVGProps } from 'react';
  const SVGComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}
