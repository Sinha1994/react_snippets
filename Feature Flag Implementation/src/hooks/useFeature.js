import fetchAllFeatures from "../asset/feature";
function getFeature(featureName) {
  return fetchAllFeatures()
    .then((data) => {
      return data[featureName]; //{status: false, message: flag not added}
    })
    .catch((err) => console.log(err));
}

export default getFeature;
