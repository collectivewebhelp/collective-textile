export type Rug = {
  slug: string;
  thumb: string;
  full: string;
  title: string;
  description: string;
  dimensions: string;
  material: string;
  technique: string;
  condition: string;
  origin: string;
  period: string;
};

const rugFiles = [
  "IMG_0999.jpg",
  "IMG_1004.jpg",
  "IMG_1014.jpg",
  "ct-rug-001.jpg",

  "IMG_1008.jpg",
  "IMG_1024.jpg",
  "IMG_1002.jpg",
  "ct-rug-002.jpg",

  "IMG_1012.jpg",
  "IMG_1040.jpg",
  "IMG_1005.jpg",
  "ct-rug-003.jpg",

  "IMG_1016.jpg",
  "IMG_1042.jpg",
  "IMG_1006.jpg",
  "ct-rug-004.jpg",

  "IMG_1028.jpg",
  "IMG_1057.jpg",
  "IMG_1007.jpg",
  "ct-rug-005.jpg",

  "IMG_1059.jpg",
  "IMG_1062.jpg",
  "IMG_1003.jpg",
  "ct-rug-006.jpg",

  "IMG_1064.jpg",
  "IMG_1066.jpg",
  "IMG_1072.jpg",
  "ct-rug-007.jpg",

  "IMG_1073.jpg",
  "IMG_1074.jpg",
  "IMG_1075.jpg",
  "IMG_1076.jpg",
];

export const rugs: Rug[] = rugFiles.map((file, index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    slug: `ct-${number}`,
    thumb: `/thumbs/${file}`,
    full: `/full/${file}`,

    title: `COLLECTIVE TEXTILE N° ${number}`,

    description:
      "A Moroccan textile selected for its material presence, handmade irregularity, and quiet graphic force. This entry is a placeholder description intended to be replaced with specific information about origin, use, technique, symbolism, and condition.",

    dimensions: "dimensions to be added",
    material: "wool",
    technique: "weaving technique to be added",
    condition: "condition to be added",
    origin: "Morocco",
    period: "20th century",
  };
});