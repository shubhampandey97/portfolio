import tuberculosis from "../assets/projects/tuberculosis.png";
import anpr from "../assets/projects/anpr.png";
import objectRetrieval from "../assets/projects/object-retrieval.png";
import deliveryPrediction from "../assets/projects/delivery-time.png";

export const projects = [
  {
    id: 1,
    title: "Tuberculosis Detection using Deep Learning",

    image: tuberculosis,

    category: "Healthcare AI",

    duration: "2025",

    description:
      "Developed a deep learning-based tuberculosis detection system using chest X-ray images with transfer learning and explainable AI techniques.",

    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "VGG16",
      "ResNet50",
      "EfficientNetB0",
      "OpenCV",
      "Grad-CAM",
      "Streamlit",
    ],

    highlights: [
      "Transfer Learning",
      "Medical Image Classification",
      "Explainable AI",
      "Interactive Streamlit App",
    ],

    github: "https://github.com/shubhampandey97/tuberculosis-detection-v2",

    demo: "",

    featured: true,
  },

  {
    id: 2,

    title: "Automatic Number Plate Recognition (ANPR)",

    image: anpr,

    category: "Computer Vision",

    duration: "2025",

    description:
      "Built an AI-powered Automatic Number Plate Recognition system capable of detecting, tracking and recognizing vehicle number plates from images, videos and live webcam streams.",

    technologies: [
      "Python",
      "YOLOv8",
      "EasyOCR",
      "ByteTrack",
      "OpenCV",
      "Computer Vision",
    ],

    highlights: [
      "Real-time Detection",
      "Object Tracking",
      "OCR Pipeline",
      "Live Webcam Support",
    ],

    github: "https://github.com/shubhampandey97/number-plate-vehicle-detection",

    demo: "",

    featured: true,
  },

  {
    id: 3,

    title: "Object Retrieval using NLP",

    image: objectRetrieval,

    category: "objectRetrieval",

    duration: "2023",

    description:
      "Developed a CNN-LSTM visual grounding model to localize image regions using natural language descriptions.",

    technologies: [
      "Python",
      "PyTorch",
      "CNN",
      "LSTM",
      "NLP",
      "Computer Vision",
      "Streamlit",
    ],

    highlights: [
      "Visual Grounding",
      "Phrase Encoding",
      "Region Ranking",
      "Deep Learning",
    ],

    github: "https://github.com/shubhampandey97/npl-object-retrieval",

    demo: "",

    featured: true,
  },

  {
    id: 4,

    title: "Delivery Time Prediction",

    image: deliveryPrediction,

    category: "Machine Learning",

    duration: "2025",

    description:
      "Developed an end-to-end machine learning pipeline for predicting delivery times using historical logistics data.",

    technologies: [
      "Python",
      "Scikit-learn",
      "MLflow",
      "SHAP",
      "Streamlit",
      "Regression",
    ],

    highlights: [
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Experiment Tracking",
      "SHAP Explainability",
    ],

    github: "https://github.com/shubhampandey97/amazon-delivery-prediction",

    demo: "",

    featured: true,
  },
];