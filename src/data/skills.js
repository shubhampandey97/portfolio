import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaEye,
  FaRobot,
  FaServer,
  FaGitAlt,
  FaCloud,
  FaLinux,
  FaChartBar,
  FaCode,
  FaSearch,
  FaVial,
} from "react-icons/fa";

// Set inProgress: true on a group to show it with an "In progress" badge.
export const skills = [
  {
    title: "Model Evaluation & Auditing",
    items: [
      { name: "External Validation", icon: FaSearch },
      { name: "Data-Leakage Detection", icon: FaSearch },
      { name: "Shortcut-Learning Analysis", icon: FaSearch },
      { name: "Bootstrap CIs", icon: FaVial },
      { name: "Calibration", icon: FaVial },
      { name: "Pre-registered Experiments", icon: FaVial },
      { name: "Grad-CAM", icon: FaEye },
      { name: "SHAP", icon: FaBrain },
    ],
  },

  {
    title: "Machine Learning & Deep Learning",
    items: [
      { name: "Scikit-learn", icon: FaBrain },
      { name: "XGBoost", icon: FaBrain },
      { name: "TensorFlow / Keras", icon: FaBrain },
      { name: "PyTorch", icon: FaBrain },
      { name: "CNN", icon: FaBrain },
      { name: "LSTM", icon: FaBrain },
      { name: "Transfer Learning", icon: FaBrain },
      { name: "Feature Engineering", icon: FaBrain },
    ],
  },

  {
    title: "Computer Vision",
    items: [
      { name: "YOLOv8", icon: FaEye },
      { name: "Object Detection", icon: FaEye },
      { name: "Object Tracking (ByteTrack)", icon: FaEye },
      { name: "OCR", icon: FaEye },
      { name: "OpenCV", icon: FaEye },
      { name: "Medical Imaging", icon: FaEye },
    ],
  },

  {
    title: "Generative AI & NLP",
    inProgress: true,
    items: [
      { name: "LLMs", icon: FaRobot },
      { name: "RAG", icon: FaRobot },
      { name: "Embeddings", icon: FaRobot },
      { name: "FAISS / BM25", icon: FaRobot },
      { name: "LLM Evaluation", icon: FaRobot },
      { name: "Prompt Engineering", icon: FaRobot },
      { name: "Hugging Face", icon: FaRobot },
      { name: "Transformers", icon: FaRobot },
    ],
  },

  {
    title: "Programming, Backend & Databases",
    items: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "FastAPI", icon: FaServer },
      { name: "Django", icon: FaServer },
      { name: "REST APIs", icon: FaServer },
      { name: "PostgreSQL", icon: FaDatabase },
      { name: "Oracle", icon: FaDatabase },
      { name: "MySQL", icon: FaDatabase },
      { name: "DuckDB", icon: FaDatabase },
    ],
  },

  {
    title: "Data Analytics & Visualization",
    items: [
      { name: "Pandas", icon: FaChartBar },
      { name: "NumPy", icon: FaChartBar },
      { name: "Power BI", icon: FaChartBar },
      { name: "Tableau", icon: FaChartBar },
      { name: "Matplotlib", icon: FaChartBar },
      { name: "Seaborn", icon: FaChartBar },
      { name: "Excel", icon: FaChartBar },
    ],
  },

  {
    title: "MLOps & Engineering Practice",
    items: [
      { name: "MLflow", icon: FaServer },
      { name: "Pytest", icon: FaVial },
      { name: "GitHub Actions CI", icon: FaGitAlt },
      { name: "Streamlit", icon: FaServer },
      { name: "Git & GitHub", icon: FaGitAlt },
    ],
  },

  {
    title: "Cloud & Tools",
    items: [
      { name: "Google Cloud Storage", icon: FaCloud },
      { name: "Kaggle GPUs", icon: FaCode },
      { name: "Linux", icon: FaLinux },
      { name: "VS Code", icon: FaCode },
      { name: "Jupyter", icon: FaCode },
    ],
  },
];
