// data.js
const tagDescriptions = {
  "AHP": `
    Disease found: Acute Hepatic Porphyria/Genetic mutation found: HMBS c.648_651+1delCCAGG consistent with presentation of Acute Hepatic Porphyria.
    Current as of: Sat Dec 23 2023
    Disease Overview: Acute Hepatic Porphyria is a rare genetic disease affecting the heme synthesis pathway. [more info]
    Signs and Symptoms: abdominal pain, central and autonomic nervous system abnormalities, peripheral neuropathy, skin blisters/rashes, nausea, vomiting, IBS-like symptoms, Iron Deficiency Anemia, menstrual cycle abnormalities [more info]
    Diagnosis: Definitive diagnosis via genetic testing panels available for free here: Urine tests during an acute attack
    Treatment: Acute: IV hematin, supportive treatment with electrolyte monitoring. Preventative: Givlaari/Givosiran. Available for free for certain patients here.
    Management: Adverse effects of these medications may be more common in this disease due to CYP450 utilization overload.
    Specialist Referral: Medical Genetics Department at extension XXXX (if available at the institution). External: Dr Simon Beaven, Gastroenterology at UCLA Pfleger Liver Institute, 200 Medical Plaza Driveway Suite 214, Los Angeles, CA, 90095, 310-794-7788
    Clinical Trials: There are several clinical trials currently recruiting
  `,
  "Acute Hepatic Porphyria": `
  Disease found: Acute Hepatic Porphyria/Genetic mutation found: HMBS c.648_651+1delCCAGG consistent with presentation of Acute Hepatic Porphyria.
  Current as of: Sat Dec 23 2023
  Disease Overview: Acute Hepatic Porphyria is a rare genetic disease affecting the heme synthesis pathway. [more info]
  Signs and Symptoms: abdominal pain, central and autonomic nervous system abnormalities, peripheral neuropathy, skin blisters/rashes, nausea, vomiting, IBS-like symptoms, Iron Deficiency Anemia, menstrual cycle abnormalities [more info]
  Diagnosis: Definitive diagnosis via genetic testing panels available for free here: Urine tests during an acute attack
  Treatment: Acute: IV hematin, supportive treatment with electrolyte monitoring. Preventative: Givlaari/Givosiran. Available for free for certain patients here.
  Management: Adverse effects of these medications may be more common in this disease due to CYP450 utilization overload.
  Specialist Referral: Medical Genetics Department at extension XXXX (if available at the institution). External: Dr Simon Beaven, Gastroenterology at UCLA Pfleger Liver Institute, 200 Medical Plaza Driveway Suite 214, Los Angeles, CA, 90095, 310-794-7788
  Clinical Trials: There are several clinical trials currently recruiting
`
  // Add more tags and descriptions as needed
  // Example: AnotherTerm: "Description for Another Term...",
};

export const getTagDescription = (tag) => {

  // Convert the search term to lowercase for case-insensitive comparison
  const lowercaseTag = tag.toLowerCase();

  // Convert keys in tagDescriptions to lowercase for case-insensitive comparison
  const lowercaseDescriptions = Object.fromEntries(
    Object.entries(tagDescriptions).map(([key, value]) => [key.toLowerCase(), value])
  );

  // Return the description for the given tag or a default message if not found
  return lowercaseDescriptions[lowercaseTag] || "Description not found for this term.";
};
