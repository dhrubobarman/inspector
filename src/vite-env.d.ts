/// <reference types="vite/client" />

interface ImportMetaEnv {
  // readonly VITE_APP_Example: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
