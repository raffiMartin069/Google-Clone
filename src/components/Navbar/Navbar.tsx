import BookmarkBar from "../bookmark/BookmarkBar";
import MainContent from "../content/MainContent";
import NavbarItems from "./NavbarItems";

function Navbar() {
  return (
    <nav>
      <BookmarkBar />
      <NavbarItems />
      <MainContent />
    </nav>
  );
}

export default Navbar;
