/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo.svg";
import "./App.css";
import SACIAPP from "./SaciApp.svg";
import { Input } from "./components/input";
import { CardImage } from "./components/cardImage";
import {
  CHECKSVG,
  CLOCKSVG,
  LOCATIONSVG,
  MAILSVG,
  PHONESVG,
  WHATSAPP,
} from "./components";
import { CardContact } from "./components/cardContact";
const urlimage1 = `https://www.saci-erp.com/wp-content/uploads/2022/04/saci_img_16-min.jpg`;
const urlimage2 = `https://www.saci-erp.com/wp-content/uploads/2022/05/saci_img_27-min.jpg`;
const urlimage3 = `https://www.saci-erp.com/wp-content/uploads/2022/05/saci_img_28-min.jpg`;
const urlimage4 = `https://www.saci-erp.com/wp-content/uploads/2022/05/saci_img_2-min.jpg`;
const ulrimage5 = `https://www.saci-erp.com/wp-content/uploads/2022/06/saci_img_29-min.jpg`;

function App() {
  const TableROW = ({ value, ispar = false }) => {
    const className = ispar
      ? "bg-gray-100 hover:bg-gray-300"
      : "hover:bg-gray-300";
    return (
      <tr className={className}>
        <td className="px-5 py-2">{value}</td>
        <td className="flex px-5 py-2 justify-center">
          <CHECKSVG color="green" />
        </td>
      </tr>
    );
  };
  return (
    <div className="min-h-screen min-w-full">
      <nav className="fixed  z-50 w-full p-5 px-5 md:px-16 bg-gradient-to-r from-white to-saciblue">
        <div className="flex justify-between w-auto">
          <div className="flex items-center text-white">
            <a href="#">
              <img
                src={SACIAPP}
                alt="SACIAPP"
                className="h-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 cursor-pointer"
              />
            </a>
          </div>
          <div className="flex">
            <div className="mr-5">
              <a href="https://wa.link/ogkq14" target="_blank" rel="noreferrer">
                {/* <WHATSAPP className="w-7 h-7 fill-white hover:fill-green-600 hover:w-8 hover:h-8 cursor-pointer" /> */}
                <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 bg-green-500 rounded-full p-2 w-auto flex justify-center">
                  <WHATSAPP className=" w-5 h-5 fill-white" />
                </div>
              </a>
            </div>
            <div className="">
              <div className="text-sm"></div>
              <div>
                <a
                  href="#"
                  className="inline-block transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 text-sm px-4 py-2 leading-none border rounded bg-red-600 text-white border-red-600 hover:border-transparent  hover:text-teal  mt-0"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="bg-fixed grid grid-cols-1 md:grid-cols-2 w-full text-6xl items-center min-h-screen md:bg-cover "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(0, 0, 105, 0.9)),url(${ulrimage5})`,
        }}
      >
        <div className="text-3xl md:text-4xl text-center font-black pt-20 md:pt-0 px-10 text-gray-100">
          Util??zala gratis e ilimitadamente todo el 2022. ??Sin planes, ni
          contratos!
        </div>
        <div className="fade-in-bottom z-10 grid grid-cols-1 text-base text-center bg-white text-black rounded-lg py-5 px-16 mx-5 my-2 md:mx-16">
          <div className="text-xl font-bold text-start mb-5">
            Solicitar un DEMO
          </div>
          <Input placeholder="Nombre" type="text" />
          <Input placeholder="Ciudad" type="text" />
          <Input placeholder="Correo" type="text" />
          <Input placeholder="Tel??fono" type="text" />
          <button className="bg-red-600 text-white font-semibold rounded-2xl py-2 px-4 md:mt-5 hover:bg-red-700">
            Solicitar Informaci??n
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center px-5 text-center py-10">
        <div className="text-saciblue font-bold text-4xl md:text-6xl">
          Software Comercial para empresas RIMPE
        </div>
        <div className="text-red-600 font-bold text-2xl mt-5">
          ??Licencia Gratuita, para todo el 2022!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white text-xl font-semibold text-right mt-5">
          <CardImage urlImage={urlimage2}>Escritorio</CardImage>
          <CardImage urlImage={urlimage3}>Nube</CardImage>
          <CardImage urlImage={urlimage4}>Tu Eliges</CardImage>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-5 text-center">
        <div className="grid grid-cols-1 self-center md:ml-5">
          <div className="flex justify-center">
            <img className="w-8/12" src={SACIAPP} alt="SACIAPP" />
          </div>

          <div className="text-saciblue font-normal text-2xl md:text-4xl mt-3">
            Facturaci??n Electr??nica
          </div>
          <div className="text-red-600 text-xl font-semibold mt-5">
            ??Util??zala Gratis e ilimitadamente todo el 2022! ??Sin planes, ni
            contratos!
          </div>
          <div className="text-saciblue text-xl font-bold mt-5">
            Incluye App m??vil nativa y acceso al Portal web
          </div>
        </div>
        <div className="col-span-2 flex border-2 border-saciblue p-5 rounded-xl text-center justify-center md:mx-10">
          <table class="table-auto">
            <thead className="bg-saciblue text-white">
              <tr>
                <th className="px-5 py-5 md:px-14 lg:px-20">
                  Documentos electr??nicos
                </th>
                <th className="px-5 py-5 md:px-14 lg:px-20">
                  Emisi??n ilimitada
                </th>
              </tr>
            </thead>
            <tbody>
              <TableROW value={`Facturas`} />
              <TableROW value={`Nota de Cr??dito`} ispar={true} />
              <TableROW value={`Nota de D??bito`} />
              <TableROW value={`Gu??a de Remisi??n`} ispar={true} />
              <TableROW value={`Retenci??n`} />
              <TableROW value={`Liquidaci??n de Compra`} ispar={true} />
            </tbody>
            <thead className="bg-saciblue text-white">
              <tr>
                <th className="px-5 py-5">Caracteristicas</th>
                <th className="px-5 py-5">Ilimitados</th>
              </tr>
            </thead>
            <tbody>
              <TableROW value={`Usuarios`} />
              <TableROW value={`Puntos de Emisi??n`} ispar={true} />
              <TableROW value={`Dispositivos`} />
              <TableROW value={`Pedidos en l??nea`} ispar={true} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-red-600 text-center text-3xl font-bold mb-5 mx-0">
        Cont??ctanos
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mx-5">
        <CardContact
          title={`Tel??fonos`}
          description={`(593) 99 856 9053`}
          SVG={PHONESVG}
        />
        <CardContact
          title={`Correo`}
          description={`saci-rimpe@saci-erp.com`}
          SVG={MAILSVG}
        />
        <CardContact
          title={`Horario`}
          description={`Lunes-Viernes (08:30 - 17:30)`}
          SVG={CLOCKSVG}
        />
        <CardContact
          title={`Direcci??n`}
          description={`Av. San Luis Nro 0-7 y Av. Isabela Edif. Dinalco ofi. 7`}
          SVG={LOCATIONSVG}
        />
      </div>
      <footer className="text-center my-10">
        ?? Copyright 2020 SaciAPP. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
