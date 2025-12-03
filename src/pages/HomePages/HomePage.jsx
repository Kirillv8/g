import PredictGenderForm from "../../features/predict-gender-by-name/Predict-gender-form";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <PredictGenderForm />
    </div>
  );
};

export default HomePage;
