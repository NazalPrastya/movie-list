const Select = (props) => {
  const { name, children } = props;
  return (
    <div className="my-2 ">
      <select id={name} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 capitalize">
        {children}
      </select>
    </div>
  );
};
export default Select;
