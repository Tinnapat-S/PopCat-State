import React from "react"
import SplitScreen from "./layout/SplitScreen" //main
import RegisterForm from "./RegisterForm"
import CatBox from "./CatBox"

function App() {
  const [catBois, setCatBois] = React.useState([])
  /// dashboard
  const [countCat, setCountCat] = React.useState(0)
  const [totalCount, setTotalCount] = React.useState(0)

  return (
    <>
      <SplitScreen>
        {/******** Left Side  *********/}
        <>
          <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
            {/******** Start Form ******/}
            <RegisterForm
              setCountCat={setCountCat}
              setCatBois={setCatBois}
              catBois={catBois}
            />
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
                  <h1 className="text-3xl font-semibold italic">
                    {totalCount}
                  </h1>
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
