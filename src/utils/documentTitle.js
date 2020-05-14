export default function documentTitle(name) {
  const defaultName = process.env.REACT_APP_NAME_SEO || 'React Eddy 🚀 ';
  document.title = `${defaultName}| ${name}`;

  return true;
}
