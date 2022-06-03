import "./styledcomponents/Header.module.css"
let h={
    'header':"Header_header__mdVx3",
    'App_logo':"Header_App-logo__ygNAC"
}
function Header(props:any) {
    return (
      <header className={h.header}>
      <div> <img className={h.App_logo} src="https://iconape.com/wp-content/png_logo_vector/react.png" alt="img" /></div>
      </header>
    );
  }

  export default Header;
  