import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { Application } from '@/containers/application';
import '@/styles/base.css';

createRoot(document.getElementById('root')!).render(createElement(Application));
