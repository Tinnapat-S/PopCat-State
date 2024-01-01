import React from "react"
export default function DashBoard({ catBois }) {
  const sumTotalCount = () => {
    const totalCount = catBois.reduce(
      (total, cat) => total + (cat.count || 0),
      0
    )
    return totalCount
  }
  const totalCount = sumTotalCount()

  const highestCat = () => {
    const temp = [...catBois].sort(
      (catObj1, catObj2) => catObj2.count - catObj1.count
    ) // sort by highest count
    return temp.length > 0 ? temp[0] : null
  }

  return (
    <div className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center">
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-3xl font-semibold italic">Total Cat</h1>
          <h1 className="text-3xl font-semibold italic">{catBois.length}</h1>
        </div>
        <div>
          <h1 className="text-3xl font-semibold italic">Total Count</h1>
          <h1 className="text-3xl font-semibold italic">{totalCount}</h1>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-3xl font-semibold italic">LEADER</h1>
          <h1 className="text-3xl font-semibold italic">
            {highestCat()?.name || "none"} : {highestCat()?.country || "none"}
          </h1>
        </div>
        <div>
          <h1 className="text-3xl font-semibold italic">Highest Click</h1>
          <h1 className="text-3xl font-semibold italic">
            {highestCat()?.count || 0}
          </h1>
        </div>
      </div>
    </div>
  )
}
