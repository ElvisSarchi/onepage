/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo.svg";
import "./App.css";
import SACIAPP from "./SaciApp.svg";
import { Input } from "./components/input";
import { CardImage } from "./components/cardImage";
import { CHECKSVG } from "./components";
const urlimage1 = `https://www.saci-erp.com/wp-content/uploads/2022/04/saci_img_16-min.jpg`;
const urlimage2 = `https://www.saci-erp.com/wp-content/uploads/2022/05/saci_img_27-min.jpg`;
const urlimage3 = `https://www.saci-erp.com/wp-content/uploads/2022/05/saci_img_28-min.jpg`;
const urlimage4 = `https://www.saci-erp.com/wp-content/uploads/2022/05/saci_img_2-min.jpg`;

const rowTable = ({value}) => {
  return (
    <tr className="hover:bg-gray-300">
      <td className="px-10 py-2">{value}</td>
      <td className="flex px-10 py-2 justify-center">
        <CHECKSVG color="green" />
      </td>
    </tr>
  );
};

function App() {
  return (
    <div className="min-h-screen min-w-full">
      <nav class="fixed flex items-center min-w-full justify-between flex-wrap bg-teal p-6 px-12 bg-gray-300">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <img src={SACIAPP} alt="SACIAPP" width="100" height="100" />
        </div>
        {/* <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <div class="w-auto flex-grow flex tems-center ">
          <div class="text-sm flex-grow"></div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:text-teal hover:bg-white mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <div
        class="grid grid-cols-1 md:grid-cols-2 w-screen text-6xl items-center min-h-screen backdro "
        style={{ backgroundImage: `url(${urlimage1})` }}
      >
        <div className="text-4xl text-center font-bold pt-16 md:pt-0 px-10 text-stone-800 ">
          Utilízala gratis e ilimitadamente todo el 2022. ¡Sin planes, ni
          contratos!
        </div>
        <div className="grid grid-cols-1 text-base text-center bg-white text-black rounded-lg py-5 px-16 mx-14">
          <div className="text-xl font-bold text-start mb-5">
            Solicitar un DEMO
          </div>
          <Input placeholder="Nombre" type="text" />
          <Input placeholder="Ciudad" type="text" />
          <Input placeholder="Correo" type="text" />
          <Input placeholder="Teléfono" type="text" />
          <button className="bg-gradient-to-r from-red-200 to-red-600 mt-5 text-white font-semibold rounded-2xl py-2 px-4">
            Solicitar Información
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center px-16 text-center py-10">
        <div className="text-blue-900 font-bold text-4xl md:text-6xl">
          Software Comercial para empresas RIMPE
        </div>
        <div className="text-red-600 font-bold text-2xl mt-5">
          ¡Licencia Gratuita, para todo el 2022!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white text-xl font-semibold text-right mt-5">
          <CardImage urlImage={urlimage2}>Escritorio</CardImage>
          <CardImage urlImage={urlimage3}>Nube</CardImage>
          <CardImage urlImage={urlimage4}>Tu Eliges</CardImage>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-16 text-center">
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <img className="w-8/12" src={SACIAPP} alt="SACIAPP" />
          </div>

          <div className="text-blue-900 font-normal text-2xl md:text-4xl mt-3">
            Facturación Electrónica
          </div>
          <div className="text-red-600 text-xl font-semibold mt-5">
            ¡Utilízala Gratis e ilimitadamente todo el 2022! ¡Sin planes, ni
            contratos!
          </div>
          <div className="text-blue-900 text-xl font-bold mt-5">
            Incluye App móvil nativa y acceso al Portal web
          </div>
        </div>
        <div className="col-span-2 border-2 border-black p-10 rounded-xl text-center">
          <table class="table-auto">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-10 py-5">Documentos electrónicos</th>
                <th className="px-10 py-5">Emisión ilimitada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-300">
                <td className="px-10 py-2">Facturas</td>
                <td className="flex px-10 py-2 justify-center">
                  <CHECKSVG color="green" />
                </td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-300">
                <td className="px-10 py-2">Guías de remisión</td>
                <td className="flex px-10 py-2 justify-center">
                  <CHECKSVG color="green" />
                </td>
              </tr>
              <tr className="hover:bg-gray-300">
                <td className="px-10 py-2">Retenciones</td>
                <td className="flex px-10 py-2 justify-center">
                  <CHECKSVG color="green" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
