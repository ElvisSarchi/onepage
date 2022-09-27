export function CardContact({ title, description, SVG, ...props }) {
  return (
    <div
      {...props}
      className="grid grid-cols-1 md:grid-cols-3 place-items-center border-2 text-center border-saciblue p-5 m-5 rounded-xl"
    >
      <div className="bg-saciblue rounded-full p-3 w-auto flex justify-center">
        <SVG className=" w-5 h-5 fill-white" />
      </div>
      <div className="text-saciblue w-full text-xl my-3 font-bold md:col-span-2 md:text-start">{title}</div>
      <div className="w-auto md:col-span-3 md:text-center">{description}</div>
    </div>
  );
}
