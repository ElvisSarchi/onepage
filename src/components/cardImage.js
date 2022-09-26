export function CardImage({ urlImage, children, ...props }) {
  return (
    <div
      {...props}
      className="flex md:mx-10 px-10 h-40 transition ease-in-out delay-75 hover:translate-y-1 hover:scale-110 my-5 items-center justify-end bg-cover rounded-2xl "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(0, 0, 105, 0.9)), url(${urlImage})`,
      }}
    >
      {children}
    </div>
  );
}
