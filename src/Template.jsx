import SplitScreen from './layout/SplitScreen';

function App() {
  return (
    <SplitScreen>
      {/******** Left Side  *********/}
      <>
        <div className='flex-1 flex flex-col p-[20px] text-center justify-center'>
          {/******** Start Form ******/}
          <form className='flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center text-black'>
            <h1 className='text-3xl font-semibold italic'>Join for Click Cat !!</h1>
            {/* Cat Name */}
            <input className='w-full p-2 border-2 border-slate-300 rounded-md' placeholder='cat' />
            {/* Cat Country */}
            <select className='w-full p-2  border-2 border-slate-300 rounded-md'>
              <option value='' disabled>
                select country
              </option>
              <option value='Thailand'>Thailand</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
            </select>
            {/* Error */}
            <p className='text-red-500'>ERROR</p>
            {/* Submit */}
            <button
              type='submit'
              className='bg-zinc-200 mt-4 p-2 rounded-xl text-xl text-black hover:bg-gray-700 hover:text-white'
            >
              Join
            </button>
          </form>
          {/******** End Form ******/}
        </div>

        <div className='flex-1 flex flex-col p-[20px] text-center justify-center'>
          {/******** Start DashBoard ******/}
          <div className='flex flex-col gap-y-5 p-8 border border-gray-300 rounded-md h-full justify-center'>
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-3xl font-semibold italic'>Total Cat</h1>
                <h1 className='text-3xl font-semibold italic'>0</h1>
              </div>
              <div>
                <h1 className='text-3xl font-semibold italic'>Total Count</h1>
                <h1 className='text-3xl font-semibold italic'>0</h1>
              </div>
            </div>
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-3xl font-semibold italic'>LEADER</h1>
                <h1 className='text-3xl font-semibold italic'>Name : Country</h1>
              </div>
              <div>
                <h1 className='text-3xl font-semibold italic'>Highest Click</h1>
                <h1 className='text-3xl font-semibold italic'>0</h1>
              </div>
            </div>
          </div>

          {/******** End DashBoard ******/}
        </div>
      </>

      {/******** Right Side  *********/}
      <div className='flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll'>
        {/******** Start 1-Cat ******/}
        <div className='flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-lg relative'>
          {/* Remove Cat */}
          <div className='absolute top-[-15px] right-[-15px] bg-red-400 text-white  w-[30px] h-[30px] rounded-full text-center align-middle cursor-pointer '>
            x
          </div>
          <div>
            {/* Cat Image */}
            <div className='w-[100px]'>
              <img
                className='w-full h-auto object-cover rounded-lg'
                src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=4086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
          </div>
          {/* Cat Profile & Count*/}
          <div className='flex-1 px-4'>
            <p className='text-2xl'>Name : Country</p>
            <p>count : 0</p>
          </div>
          <div className='flex gap-1'>
            {/* Button Group */}
            <button className='px-4 py-2 bg-slate-500 rounded-md'>reset</button>
            <button className='px-4 py-2 bg-slate-500 rounded-md'>-</button>
            <button className='px-4 py-2 bg-slate-500 rounded-md'>+</button>
          </div>
        </div>
        {/******** End 1-Cat ******/}
      </div>
    </SplitScreen>
  );
}

export default App;
