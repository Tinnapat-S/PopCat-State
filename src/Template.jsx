import React from "react"
import SplitScreen from "./layout/SplitScreen" //main
import RegisterForm from "./RegisterForm"
import CatBox from "./CatBox"
import DashBoard from "./Dashboard"
function App() {
  const [catBois, setCatBois] = React.useState([])

  return (
    <>
      <SplitScreen>
        {/******** Left Side  *********/}
        <>
          <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
            {/******** Start Form ******/}
            <RegisterForm setCatBois={setCatBois} catBois={catBois} />
            {/******** End Form ******/}
          </div>
          <div className="flex-1 flex flex-col p-[20px] text-center justify-center">
            {/******** Start DashBoard ******/}
            <DashBoard catBois={catBois} />
            {/******** End DashBoard ******/}
          </div>
        </>

        {/******** Right Side  *********/}
        <div className="flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll">
          {/******** Start 1-Cat ******/}

          {catBois &&
            catBois.map((cat) => {
              return <CatBox key={cat.id} cat={cat} setCatBois={setCatBois} />
            })}
          {/******** End 1-Cat ******/}
        </div>
      </SplitScreen>
    </>
  )
}

export default App
