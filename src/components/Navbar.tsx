export default function Navbar() {
  return (
    <div>
      <nav className="flex px-3 mt-4 sm:px-2">
        <ul className="grid gap-x-4 lg:gap-x-10 grid-cols-4 w-full justify-between text-center">
          <a href="#/">
            <li className="flex flex-col cursor-pointer group">
              <span
                className="
            flex h-24 items-center justify-center rounded-lg
            
            text-cyan-500
            hover:text-white hover:bg-cyan-500
            "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                </svg>
              </span>
              <span className="group-hover:font-bold">Hoteles</span>
            </li>
          </a>
          <a href="#/eventos">
            <li className="flex flex-col cursor-pointer group">
              <span
                className="
            flex h-24 items-center justify-center rounded-lg
            
            text-cyan-500
            hover:text-white hover:bg-cyan-500
            "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"></path>
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                </svg>
              </span>
              <span className="group-hover:font-bold">Vuelos</span>
            </li>
          </a>
          <a href="#/ayuda">
            <li className="flex flex-col cursor-pointer group">
              <span
                className="
            flex h-24 items-center justify-center rounded-lg
            bg-cyan-500
            text-white
            hover:text-cyan-500 hover:bg-white
            "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8V72zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112v160zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32H272zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                </svg>
              </span>
              <span className="group-hover:font-bold">Transporte</span>
            </li>
          </a>
          <a href="#/sedes">
            <li className="flex flex-col cursor-pointer group">
              <span
                className="
            flex h-24 items-center justify-center rounded-lg
            
            text-cyan-500
            hover:text-white hover:bg-cyan-500
            "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"></path>
                </svg>
              </span>
              <span className="group-hover:font-bold">Comidas</span>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
