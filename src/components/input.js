export function Input({ childres, ...props }) {
  return (
    <input
      {...props}
      className="border rounded-2xl border-gray-500 p-2 px-4 my-2 hover:border 
      hover:border-saciblue focus:border-2 focus:border-saciblue focus:outline-none"
    />
  );
}
