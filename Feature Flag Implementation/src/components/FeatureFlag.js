import { useEffect, useState } from "react";
import getFeature from "../hooks/useFeature";

const FeatureFlagComponent = () => {
  const [isExtendedSummary, SetIsExtendedSummary] = useState(true);
  const [isFeedbackDialog, SetIsFeedbackDialog] = useState(false);
  const [headerColor, setHeader] = useState("blue");
  const setFeatureState = function (state, callback, defaultState) {
    state === undefined ? callback(defaultState) : callback(state);
  };
  useEffect(() => {
    getFeature("feedback-dialog").then((feature) => {
      setFeatureState(feature, SetIsFeedbackDialog, true);
    });
    getFeature("extended-summary").then((feature) => {
      setFeatureState(feature, SetIsExtendedSummary, false);
    });
    getFeature("header-color").then((feature) => {
      setFeatureState(feature, setHeader, "blue");
    });
  }, []);

  return (
    <>
      {isExtendedSummary && <p>Extended-summary</p>}
      {isFeedbackDialog && <p>Feedback-dialog</p>}
    </>
  );
};
export default FeatureFlagComponent;
