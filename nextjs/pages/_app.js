import '../global.css'

export default function YourApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  console.log(Component);
  console.log(pageProps);
  return getLayout(<Component {...pageProps} />)
}
