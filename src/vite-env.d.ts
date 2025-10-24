interface ImportMetaEnv {
  readonly VITE_X_MAL_CLIENT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
