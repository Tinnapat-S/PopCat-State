import React from "react"
export default function CatBox(props) {
  const [count, setCount] = React.useState(0)

  const haddleDeleteButton = (thisCatId) => {
    const deleteThisCat = props.cat.findIndex((cat) => cat.id == thisCatId) //props.cat == [{},{}]  findIndex at id = id
    props.setCatBois((current) =>
      current.filter((cat, index) => index !== deleteThisCat)
    )
    props.setCountCat((current) => current - 1)
    //props.setCat(current) => current.filter((cat) => cat !== thiscat)
    //props.setCat((current) => [...current].filter(!cat))
  }
  const haddleIncreaseButton = () => {
    return setCount((count) => count + 1)
  }
  const haddleDecreaseButton = () => {
    if (count > 0) {
      return setCount((count) => count - 1)
    }
  }
  const haddleResetButton = () => {
    setCount(0)
  }

  return props.cat.map((catty) => (
    <div className="flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-lg relative">
      {/* Remove Cat */}
      <div
        onClick={() => haddleDeleteButton(catty.id)}
        className="absolute top-[-15px] right-[-15px] bg-red-400 text-white  w-[30px] h-[30px] rounded-full text-center align-middle cursor-pointer "
      >
        x
      </div>
      <div>
        {/* Cat Image */}
        <div className="w-[100px]">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=4086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      {/* Cat Profile & Count*/}
      <div className="flex-1 px-4">
        <p className="text-2xl">
          {catty.name} : {catty.country}
        </p>
        <p>count : {count}</p>
      </div>
      <div className="flex gap-1">
        {/* Button Group */}
        <button
          onClick={haddleResetButton}
          className="px-4 py-2 bg-slate-500 rounded-md"
        >
          reset
        </button>
        <button
          onClick={haddleDecreaseButton}
          className="px-4 py-2 bg-slate-500 rounded-md"
        >
          -
        </button>
        <button
          onClick={haddleIncreaseButton}
          className="px-4 py-2 bg-slate-500 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  ))
}
