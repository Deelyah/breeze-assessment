export const AppLoaderComponent = ({ loadingMessage }) => {
  return <div>{loadingMessage || 'Loading...'}</div>;
};
