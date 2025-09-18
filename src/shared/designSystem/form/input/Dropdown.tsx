interface Data {
  _id: string;
  name?: string;
  brand_name?: string;
}

interface IdropDownInput {
  label?: string;
  labelFor?: string;
  name?: string;
  data?: Data[];
}

const Dropdown: React.FC<IdropDownInput> = ({
  label = "",
  labelFor = "",
  name = "",
  data,
  ...rest
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={labelFor}
          className="text-gray-800 font-semibold text-lg"
        >
          {label}
        </label>
      )}
      <select
        name={name}
        {...rest}
        className="w-full border border-violet-600 p-2 rounded outline-none"
      >
        {data ? (
          data.map((item, index) => (
            <option value={item._id} key={index}>
              {item.name ?? item.brand_name}
            </option>
          ))
        ) : (
          <option value="select">Select</option>
        )}
      </select>
    </>
  );
};

export default Dropdown;
