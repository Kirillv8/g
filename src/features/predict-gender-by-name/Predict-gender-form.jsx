import Input from "../../shared/ui/Input/Input";
import Button from "../../shared/ui/Button/Button";
import { useState, useEffect } from "react";
import { getGenderByName } from "../../shared/api/getGenderByName.js";

const PredictGenderForm = () => {
  const [name, setName] = useState("");
  const [showGender, setShowGender] = useState(null);

  useEffect(() => {
    const fetchData = async (name) => {
      let resData = await getGenderByName(name);
      setShowGender(resData);
    };
    fetchData(name);
  }, [name]);

  return (
    <div>
      <Input
        type="text"
        placeholder="inter your name"
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      />
      <Button></Button>
      {showGender && <p>{`Your gender is ${showGender}`}</p>}
    </div>
  );
};

export default PredictGenderForm;
