import SignIn from "./Pages/SignIn";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
        {/* <!-- fixed-width --> */}
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
          <div className="sticky top-0 p-4 w-full h-full">
            {/* <!-- nav goes here --> */}
          </div>
        </div>
        <main role="main" className="w-full flex-grow pt-1 px-3">
          <SignIn />
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
          {/* <!-- fixed-width --> */}
          <div className="flex sm:flex-col px-2">
            {/* <!-- sidebar goes here --> */}
          </div>
        </div>
      </div>
      <footer className="bg-black mt-auto">{/* ... */}</footer>
    </>
  );
}

export default App;
