// data.js
const tagDescriptions = {
  AHP: "Acute Hepatic Porphyria is a group of rare genetic disorders",
  // Add more terms and descriptions as needed
  // Example: AnotherTerm: "Description for Another Term...",
};

export const getTagDescription = (tag) => {
  // Return the description for the given tag or a default message if not found
  return tagDescriptions[tag] || "Description not found for this term.";
};
