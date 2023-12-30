import React from "react"
import SplitScreen from "./layout/SplitScreen" //main
import { nanoid } from "nanoid"
import CatBox from "./CatBox"
function RegisterForm() {
  return <></>
}
function App() {
  const [catBois, setCatBois] = React.useState([])
  ///form
  const [catName, setCatName] = React.useState("")
  const [catCountry, setCatCountry] = React.useState("")
  const [isError, setIsError] = React.useState(false)
  /// dashboard
  const [countCat, setCountCat] = React.useState(0)
  const haddleOnSubmit = (event) => {
    event.preventDefault()
    if (catName != "") {
      setCountCat(catBois.length + 1)
      return setCatBois([
        ...catBois,
        {
          id: nanoid(),
          name: catName,
          country: catCountry,
        },
      ])
    }
    return setIsError(true)
  }
  const haddleInputCatName = (event) => {
    setIsError(false)
    setCatName(event.target.value)
  }
  const haddleInputCountry = (event) => {
    setCatCountry(event.target.value)
  }

  return (
    <>
      <SplitScreen>
        {/******** Left Side  *********/}
        <>
          <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
            {/******** Start Form ******/}
            <form
              onSubmit={haddleOnSubmit}
              className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black"
            >
              <h1 className="text-3xl font-semibold italic">
                Join for Click Cat !!
              </h1>
              {/* Cat Name */}
              <input
                onChange={haddleInputCatName}
                onClick={haddleInputCatName}
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
            {/******** End Form ******/}
          </div>

          <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
            {/******** Start DashBoard ******/}
            <div className="flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center">
              <div className="flex justify-evenly">
                <div>
                  <h1 className="text-3xl font-semibold italic">Total Cat</h1>
                  <h1 className="text-3xl font-semibold italic">{countCat}</h1>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold italic">Total Count</h1>
                  <h1 className="text-3xl font-semibold italic">0</h1>
                </div>
              </div>
              <div className="flex justify-evenly">
                <div>
                  <h1 className="text-3xl font-semibold italic">LEADER</h1>
                  <h1 className="text-3xl font-semibold italic">
                    Name : Country
                  </h1>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold italic">
                    Highest Click
                  </h1>
                  <h1 className="text-3xl font-semibold italic">0</h1>
                </div>
              </div>
            </div>

            {/******** End DashBoard ******/}
          </div>
        </>

        {/******** Right Side  *********/}
        <div className="flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll">
          {/******** Start 1-Cat ******/}
          <CatBox
            cat={catBois}
            setCatBois={setCatBois}
            setCountCat={setCountCat}
          />
          {/******** End 1-Cat ******/}
        </div>
      </SplitScreen>
    </>
  )
}

export default App
