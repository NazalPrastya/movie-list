const Option = (props) => {
  const { option, children } = props;
  return (
    <option value={option} className="capitalize">
      {children}
    </option>
  );
};

export default Option;
