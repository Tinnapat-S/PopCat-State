import React from "react"
import { nanoid } from "nanoid"
export default function RegisterForm(props) {
  const { setCountCat, setCatBois, catBois } = props
  const [catName, setCatName] = React.useState("")
  const [catCountry, setCatCountry] = React.useState("")
  const [isError, setIsError] = React.useState(false)

  const haddleOnSubmit = (event) => {
    event.preventDefault()
    if (catName != "" && catCountry != "") {
      setCountCat(catBois.length + 1)
      const catObj = {
        id: nanoid(),
        name: catName,
        country: catCountry,
      }
      let temp = setCatBois([...catBois, catObj])
      setCatName("")
      return temp
    }
    return setIsError(true)
  }
  const haddleInputCatName = (event) => {
    setIsError(false)
    setCatName(event.target.value)
  }
  const haddleInputCountry = (event) => {
    setIsError(false)
    setCatCountry(event.target.value)
  }
  return (
    <>
      <form
        onSubmit={haddleOnSubmit}
        className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black"
      >
        <h1 className="text-3xl font-semibold italic">Join for Click Cat !!</h1>
        {/* Cat Name */}
        <input
          onChange={haddleInputCatName}
          onClick={haddleInputCatName}
          value={catName}
          className="w-full p-2 border-2 border-slate-300 rounded-md"
          placeholder="cat"
        />
        {/* Cat Country */}
        <select
          onChange={haddleInputCountry}
          className="w-full p-2  border-2 border-slate-300 rounded-md"
          defaultValue={""}
        >
          <option value="" disabled>
            select country
          </option>
          <option value="Thailand">Thailand</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {/* Error */}
        {isError && <p className="text-red-500">ERROR</p>}
        {/* Submit */}
        <button
          type="submit"
          className="bg-zinc-200 mt-4 p-2 rounded-xl text-xl text-black hover:bg-gray-700 hover:text-white"
        >
          Join
        </button>
      </form>
    </>
  )
}
