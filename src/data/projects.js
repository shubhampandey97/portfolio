import tuberculosis from "../assets/projects/tuberculosis.png";
import anpr from "../assets/projects/anpr.png";
import objectRetrieval from "../assets/projects/object-retrieval.png";
import deliveryPrediction from "../assets/projects/delivery-time.png";

// status: "Completed" | "In progress"
// results: the numbers / findings shown in the "Key results" box
export const projects = [
  {
    id: 1,
    title: "Tuberculosis Detection — Model Audit & External Validation",
    image: tuberculosis,
    category: "Healthcare AI",
    duration: "2025 – 2026",
    status: "Completed",

    description:
      "Took a chest X-ray TB classifier that scored 0.998 AUC and asked whether it really looks at the lungs. Fixed invalid evaluation, then ran a pre-registered external test on 800 X-rays from two other hospitals and showed the model had learned dataset shortcuts.",

    results: [
      "Internal test AUC 0.998 → external AUC ≈ 0.67 (Shenzhen 662 + Montgomery 138 X-rays)",
      "Image metadata alone (e.g. file size) predicts the label with AUC 0.92 — a data-source shortcut",
      "Models still score AUC > 0.9 with the lungs hidden; Grad-CAM puts less attention on real lungs than chance",
      "Pre-registered shortcut-removal retrain: preprocessing cannot fix a shortcut when source = label",
    ],

    technologies: [
      "TensorFlow",
      "ResNet50",
      "EfficientNetB0",
      "Grad-CAM",
      "Bootstrap CIs",
      "Calibration",
      "Pytest (87 tests)",
      "GitHub Actions",
      "Streamlit",
    ],

    github: "https://github.com/shubhampandey97/tuberculosis-detection-v2",
    demo: "",
  },

  {
    id: 2,
    title: "ANPR & Traffic Monitoring — Leakage Audit and Rebuild",
    image: anpr,
    category: "Computer Vision",
    duration: "2025 – 2026",
    status: "Completed",

    description:
      "Audited a number-plate recognition system reported at 98.5% mAP. Found heavy data leakage, rebuilt the dataset split and retrained, measured plate reading for the first time, and rebuilt the whole pipeline: detection → tracking → OCR → per-track voting.",

    results: [
      "49% of images were duplicate copies; 83–86% of val/test had a near-duplicate in training",
      "Scene-grouped, leakage-free split → honest test mAP50 0.74 (Number_plate 0.85)",
      "OCR: original EasyOCR read 0 plates correctly → plate-trained OCR + format check: 67–71% precision",
      "4K traffic clip: 9 / 9 plates logged correctly; fixed a bug that re-created the tracker every frame",
    ],

    technologies: [
      "YOLOv8",
      "ByteTrack",
      "fast-plate-ocr",
      "OpenCV",
      "PyTorch",
      "Pytest (64 tests)",
      "GitHub Actions",
      "Streamlit",
    ],

    github: "https://github.com/shubhampandey97/number-plate-vehicle-detection",
    demo: "",
  },

  {
    id: 3,
    title: "Delivery Time Prediction — End-to-End ML Pipeline",
    image: deliveryPrediction,
    category: "Machine Learning",
    duration: "2025",
    status: "Completed",

    description:
      "Predicts Amazon delivery times from order, distance and timing data. Built as a reproducible pipeline with feature engineering, model comparison, tuning, experiment tracking and explainability.",

    results: [
      "XGBoost + GridSearchCV: test RMSE ≈ 22.3, stable 5-fold CV (22.3 ± 0.18)",
      "Compared Linear Regression, Random Forest, Gradient Boosting and XGBoost",
      "Haversine distance, preparation-time and time-of-day features; IQR outlier handling",
      "MLflow experiment tracking, SHAP explanations, Streamlit app",
    ],

    technologies: [
      "Scikit-learn",
      "XGBoost",
      "Pipelines",
      "MLflow",
      "SHAP",
      "Streamlit",
    ],

    github: "https://github.com/shubhampandey97/amazon-delivery-prediction",
    demo: "",
  },

  {
    id: 4,
    title: "Natural Language Object Retrieval",
    image: objectRetrieval,
    category: "Vision + Language",
    duration: "2023 · M.Sc. project",
    status: "Completed",

    description:
      "M.Sc. project at BHU: a PyTorch re-implementation of the CNN-LSTM model from \"Natural Language Object Retrieval\" (CVPR 2016) — find the image region that matches a phrase like \"the man on the left\".",

    results: [
      "VGG16 region features + LSTM phrase encoder for region ranking on ReferIt",
      "Selective Search region proposals, Streamlit demo",
      "Now revisiting it: proper ranking loss, P@1 evaluation and a comparison with modern open-vocabulary detectors",
    ],

    technologies: [
      "PyTorch",
      "VGG16",
      "LSTM",
      "OpenCV",
      "Streamlit",
    ],

    github: "https://github.com/shubhampandey97/npl-object-retrieval",
    demo: "",
  },

  {
    id: 5,
    title: "Healthcare RAG with Evaluation",
    image: null,
    category: "Generative AI",
    duration: "2026",
    status: "In progress",

    description:
      "A question-answering assistant over 10 official WHO, FDA and EU documents on immunisation and AI medical devices. Every answer must cite its page, it must refuse when the sources don't say, and retrieval is measured before any LLM is added.",

    results: [
      "Done: page-level ingestion of 10 WHO, FDA and EU documents (240 pages), tested in CI",
      "Finding: WHO papers print English and French side by side, so French was ~50% of the extracted text; fixed by detecting the column gap and keeping English only",
      "Next: chunking → embeddings → retrieval evaluation on hand-written gold questions (recall@k, MRR)",
      "Then: answers with page citations and refusal, hybrid search + reranker, faithfulness evaluation with a separate judge model",
    ],

    technologies: [
      "Python",
      "PyMuPDF",
      "Pytest",
      "GitHub Actions",
      "Embeddings",
      "FAISS / Chroma",
      "LLM-as-judge",
    ],

    github: "https://github.com/shubhampandey97/healthcare-rag",
    demo: "",
  },
];
