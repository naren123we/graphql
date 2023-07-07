import React from "react";
import Select from "react-select";

const SelectBar = ({ setcode }: { setcode: (code: string) => void }) => {
  const options = [
    { value: "IN", label: "INDIA" },
    { value: "BR", label: "BRZIL" },
    { value: "US", label: "United States" },
    { value: "CA", label: "CANADA" },
    { value: "AU", label: "AUSTRILA" },
  ];

  return (
    <Select
      options={options}
      onChange={(obj) => {
        setcode(obj!.value);
      }}
      className="selectbar"
    />
  );
};

export default SelectBar;
