const items = () => {
  return ["Gmail", "Images"];
};

function NavbarItems() {
  return (
    <>
      <span className="flex py-3 justify-end px-5 gap-3 items-center">
        {items().map((item, index) => (
          <div key={index} className="text-sm">{item}</div>
        ))}
        <div><i className="bi bi-grid-3x3-gap-fill text-2xl"></i></div>
        <div><i className="bi bi-person-circle text-3xl"></i></div>
      </span>
    </>
  );
}

export default NavbarItems;
