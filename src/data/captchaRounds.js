/**
 * 5 rounds of existential reCAPTCHA data.
 * Each round has a variant header and 9 images (3x3 grid).
 * Images in src/assets must be imported so Vite can serve them.
 */
import saladImg from "../assets/images/salad.jpeg";
import dogImg from "../assets/images/dog.jpeg";

const captchaRounds = [
  {
    roundId: 1,
    headerText: "Select all squares that contain True Happiness",
    images: [
      { id: "r1-1", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r1-2", type: "filler", altText: "Wilted salad", placeholderUrl: saladImg },
      { id: "r1-3", type: "filler", altText: "Stack of unpaid bills", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Bills" },
      { id: "r1-4", type: "dog", altText: "A blurry golden retriever", placeholderUrl: dogImg },
      { id: "r1-5", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
      { id: "r1-6", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
      { id: "r1-7", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
      { id: "r1-8", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r1-9", type: "filler", altText: "Wilted salad", placeholderUrl: saladImg },
    ],
  },
  {
    roundId: 2,
    headerText: "Select the squares that contain Meaning",
    images: [
      { id: "r2-1", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
      { id: "r2-2", type: "dog", altText: "A blurry golden retriever", placeholderUrl: dogImg },
      { id: "r2-3", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
      { id: "r2-4", type: "filler", altText: "Stack of unpaid bills", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Bills" },
      { id: "r2-5", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
      { id: "r2-6", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r2-7", type: "filler", altText: "Wilted salad", placeholderUrl: saladImg },
      { id: "r2-8", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
      { id: "r2-9", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
    ],
  },
  {
    roundId: 3,
    headerText: "Select all images with Sustained Fulfillment",
    images: [
      { id: "r3-1", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
      { id: "r3-2", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r3-3", type: "filler", altText: "Stack of unpaid bills", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Bills" },
      { id: "r3-4", type: "filler", altText: "Wilted salad", placeholderUrl: saladImg },
      { id: "r3-5", type: "dog", altText: "A blurry golden retriever", placeholderUrl: dogImg },
      { id: "r3-6", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
      { id: "r3-7", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
      { id: "r3-8", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
      { id: "r3-9", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
    ],
  },
  {
    roundId: 4,
    headerText: "Select the squares that contain True Happiness",
    images: [
      { id: "r4-1", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
      { id: "r4-2", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
      { id: "r4-3", type: "filler", altText: "Wilted salad", placeholderUrl: saladImg },
      { id: "r4-4", type: "filler", altText: "Stack of unpaid bills", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Bills" },
      { id: "r4-5", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
      { id: "r4-6", type: "dog", altText: "A blurry golden retriever", placeholderUrl: dogImg },
      { id: "r4-7", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r4-8", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
      { id: "r4-9", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
    ],
  },
  {
    roundId: 5,
    headerText: "Select all squares that contain Meaning",
    images: [
      { id: "r5-1", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r5-2", type: "filler", altText: "Stack of unpaid bills", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Bills" },
      { id: "r5-3", type: "dog", altText: "A blurry golden retriever", placeholderUrl: dogImg },
      { id: "r5-4", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
      { id: "r5-5", type: "filler", altText: "Wilted salad", placeholderUrl: saladImg },
      { id: "r5-6", type: "filler", altText: "Empty microwave", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Microwave" },
      { id: "r5-7", type: "filler", altText: "Gray slush on a roadside", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Slush" },
      { id: "r5-8", type: "filler", altText: "Beige office cubicle", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Cubicle" },
      { id: "r5-9", type: "filler", altText: "Fluorescent office lights", placeholderUrl: "https://placehold.co/150x150/e5e5e5/555555?text=Lights" },
    ],
  },
];

export default captchaRounds;
