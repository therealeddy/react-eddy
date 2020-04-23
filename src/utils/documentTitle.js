export default function documentTitle(name) {
  const defaultName = process.env.REACT_APP_NAME_SEO || 'Eddy 🚀 ';
  document.title = `${defaultName}| ${name}`;

  return true;
}
