// returns the state of *all* features for current user
export default function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": true,
      "header-color": "blue",
    };
    setTimeout(resolve, 100, sampleFeatures);
  });
}
