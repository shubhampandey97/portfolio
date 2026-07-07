import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaEye,
  FaRobot,
  FaServer,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaChartBar,
  FaCode,
} from "react-icons/fa";

export const skills = [
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
    ],
  },

  {
    title: "Machine Learning & Deep Learning",
    items: [
      { name: "Scikit-learn", icon: FaBrain },
      { name: "TensorFlow", icon: FaBrain },
      { name: "PyTorch", icon: FaBrain },
      { name: "CNN", icon: FaBrain },
      { name: "LSTM", icon: FaBrain },
      { name: "Transformers", icon: FaBrain },
      { name: "Feature Engineering", icon: FaBrain },
      { name: "Model Evaluation", icon: FaBrain },
    ],
  },

  {
    title: "Computer Vision & NLP",
    items: [
      { name: "YOLOv8", icon: FaEye },
      { name: "OpenCV", icon: FaEye },
      { name: "OCR", icon: FaEye },
      { name: "Hugging Face", icon: FaRobot },
      { name: "NER", icon: FaRobot },
      { name: "Embeddings", icon: FaRobot },
      { name: "Prompt Engineering", icon: FaRobot },
      { name: "Object Detection", icon: FaEye },
    ],
  },

  {
    title: "Data Analytics & Visualization",
    items: [
      { name: "Pandas", icon: FaChartBar },
      { name: "NumPy", icon: FaChartBar },
      { name: "Power BI", icon: FaChartBar },
      { name: "Tableau", icon: FaChartBar },
      { name: "Excel", icon: FaChartBar },
      { name: "Matplotlib", icon: FaChartBar },
      { name: "Seaborn", icon: FaChartBar },
    ],
  },

  {
    title: "Cloud & Dev Tools",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
      { name: "VS Code", icon: FaCode },
      { name: "Jupyter Notebook", icon: FaCode },
    ],
  },

  {
    title: "MLOps & Deployment",
    items: [
      { name: "MLflow", icon: FaServer },
      { name: "Streamlit", icon: FaServer },
      { name: "Model Deployment", icon: FaServer },
      { name: "REST API Integration", icon: FaServer },
      { name: "Experiment Tracking", icon: FaServer },
      { name: "GitHub", icon: FaGitAlt },
    ],
  },
];