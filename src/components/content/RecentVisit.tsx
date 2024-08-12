function RecentVisit() {
  return (
    <>    
    <div className="grid grid-cols-5 gap-5 mt-5">

        {
            Array(10).fill(null).map((_, index) => (
                <div key={index} className="hover:bg-gray-200 p-1 md:p-8"><i className="bi bi-plus-circle text-4xl text-gray-400"></i></div>
            ))
        }
    </div>
    </>
  )
}

export default RecentVisit