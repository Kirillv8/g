import Input from "../../shared/ui/Input/Input";
import Button from "../../shared/ui/Button/Button";
import { useState, useEffect, useRef } from "react";
import { getGenderByName } from "../../shared/api/getGenderByName.js";

const DEBOUNCE_DELAY = 1000;

const PredictGenderForm = () => {
  const [name, setName] = useState("");
  const [showGender, setShowGender] = useState(null);
  const [pendingName, setPendingName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);

  const handleInputChange = (e) => {
    setName(e.target.value);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setPendingName(e.target.value);
    }, DEBOUNCE_DELAY);
  };

  useEffect(() => {
    if (!pendingName) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        let resData = await getGenderByName(pendingName);

        if (!resData) {
          throw new Error(status);
        }
        setShowGender(resData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [pendingName]);

  return (
    <div>
      <Input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <Button isLoading={isLoading} />
      {showGender && (
        <p>
          {`Your gender is `}
          <strong>{showGender}</strong>
          {` (Name: ${pendingName})`}
        </p>
      )}
    </div>
  );
};

export default PredictGenderForm;
