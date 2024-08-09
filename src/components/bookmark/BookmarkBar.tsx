
function BookmarkBar() {
  return (
    <span className="flex justify-end gap-2 px-5 py-2 border-b">
        <div className="text-sm content-center text-gray-300 pr-2">|</div>
        <div><i className="bi bi-folder"></i></div>
        <div className="text-xs font-normal content-center">All Bookmarks</div>
    </span>
  )
}

export default BookmarkBar