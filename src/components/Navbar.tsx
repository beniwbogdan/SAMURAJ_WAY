import "./styledcomponents/Navbar.module.css"

let n={
    'nav':"Navbar_nav__hROmP",
    'item':"Navbar_item__fnLqL"
}

function Navbar() {
  return (
    <nav className={n.nav}>
      <div className={n.item}><a href="#s">Profile</a></div>
      <div className={n.item}><a href="#s">Messages</a></div>
      <div className={n.item}><a href="#s">News</a></div>
      <div className={n.item}><a href="#s">Music</a></div>
      <div className={n.item}><a href="#s">Settings</a></div>

    </nav>
  );
}

export default Navbar;