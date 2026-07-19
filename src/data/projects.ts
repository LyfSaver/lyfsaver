export type CategoryKey =
  "mern" | "java" | "flutter" | "aiml" | "data-science" | "data-analytics" | "digital-electronics";

export interface Category {
  key: CategoryKey;
  name: string;
  short: string;
  tagline: string;
  domains: string[];
  seoTitle: string;
  seoDescription: string;
}

export const categories: Category[] = [
  {
    key: "mern",
    name: "Web Development — MERN Stack",
    short: "MERN",
    tagline: "Full-stack React + Node projects for CSE, ISE & CSBS students.",
    domains: ["CSE", "ISE", "CSBS"],
    seoTitle: "MERN Stack Final Year Project Ideas with Source Code | LYF SAVER",
    seoDescription:
      "25+ MERN stack final year project ideas for CSE, ISE & CSBS students — with full source code, report & PPT. Beat any quote you've received.",
  },
  {
    key: "java",
    name: "Web Development — Java (Spring Boot / JSP)",
    short: "Java",
    tagline: "Enterprise Java projects using Spring Boot, JSP & Servlets.",
    domains: ["CSE", "ISE", "CSBS"],
    seoTitle: "Java Final Year Project Ideas (Spring Boot / JSP) | LYF SAVER",
    seoDescription:
      "Java Spring Boot & JSP final year project ideas for engineering students — full source code, database schema, report and PPT included.",
  },
  {
    key: "flutter",
    name: "Mobile App Development — Flutter",
    short: "Flutter",
    tagline: "Cross-platform mobile apps built in Flutter/Dart.",
    domains: ["CSE", "ISE", "AIML"],
    seoTitle: "Flutter Final Year Project Ideas for Mobile Apps | LYF SAVER",
    seoDescription:
      "Flutter final year project ideas for Android & iOS — source code, docs and PPT. Cheaper than any quote you have received.",
  },
  {
    key: "aiml",
    name: "Machine Learning / AIML",
    short: "AI & ML",
    tagline: "Model-training projects across CV, NLP and predictive ML.",
    domains: ["AIML", "CSE", "DS"],
    seoTitle: "AIML Final Year Project Ideas with Source Code (2026) | LYF SAVER",
    seoDescription:
      "Machine learning & AI final year project ideas for AIML, CSE and Data Science students — trained models, source code, report & PPT.",
  },
  {
    key: "data-science",
    name: "Data Science Projects",
    short: "Data Science",
    tagline: "End-to-end data science with EDA, modelling and storytelling.",
    domains: ["DS", "AIML", "CSBS"],
    seoTitle: "Data Science Final Year Project Ideas | LYF SAVER",
    seoDescription:
      "Data Science final year project ideas — from EDA to ML models & dashboards. Full report, notebook & PPT included.",
  },
  {
    key: "data-analytics",
    name: "Data Analytics Projects",
    short: "Data Analytics",
    tagline: "Dashboards & BI projects in Power BI, Tableau and Python.",
    domains: ["DS", "CSBS", "ISE"],
    seoTitle: "Data Analytics Final Year Project Ideas & Dashboards | LYF SAVER",
    seoDescription:
      "Data analytics dashboards & BI final year projects — Power BI, Tableau, Python & SQL — with report and PPT.",
  },
  {
    key: "digital-electronics",
    name: "Digital Electronics / Embedded / IoT",
    short: "Electronics / IoT",
    tagline: "Hardware + IoT projects with microcontrollers & sensors.",
    domains: ["ECE", "EEE"],
    seoTitle: "Digital Electronics & IoT Final Year Project Ideas | LYF SAVER",
    seoDescription:
      "IoT, embedded & digital electronics final year projects for ECE / EEE students — hardware list, circuit diagram, code, report & PPT.",
  },
];

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: CategoryKey;
  stack: string[];
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function make(category: CategoryKey, stack: string[], titles: string[]): Project[] {
  return titles.map((title) => ({
    slug: slugify(title),
    title,
    description: `A complete final year ${category.replace("-", " ")} project — ${title}. Includes full source code, project report as per college format, PPT slide deck, demo video and viva prep. Built with ${stack.join(", ")}.`,
    category,
    stack,
  }));
}

export const projects: Project[] = [
  ...make(
    "mern",
    ["MongoDB", "Express", "React", "Node"],
    [
      "E-commerce Platform with Admin Dashboard",
      "Online Food Ordering & Delivery Tracking System",
      "Real Estate Listing & Booking Portal",
      "Hospital Management System",
      "Online Learning Management System (LMS)",
      "Job Portal with Resume Builder",
      "Event Management & Ticket Booking System",
      "Freelance Marketplace Platform",
      "Blogging Platform with CMS",
      "Social Media Mini-Clone",
      "Online Voting / Election System",
      "Library Management System",
      "Hotel Booking & Reservation System",
      "Crowdfunding Platform",
      "Real-time Chat Application",
      "Expense Tracker & Budgeting App",
      "Doctor Appointment Booking System",
      "Online Examination Portal",
      "Car Rental Management System",
      "Inventory & Warehouse Management System",
      "Multi-vendor Marketplace",
      "Recipe Sharing Platform",
      "Fitness / Gym Membership Management System",
      "Video Streaming Platform (Mini Netflix Clone)",
      "Real-time Collaborative Document Editor",
      "Complaint / Grievance Redressal Portal",
      "Online Matrimonial Platform",
    ],
  ),
  ...make(
    "java",
    ["Java", "Spring Boot", "MySQL"],
    [
      "Bank Management System",
      "College / University ERP System",
      "Airline Reservation System",
      "Insurance Claim Management System",
      "Payroll Management System",
      "Employee Attendance & Leave Management",
      "Restaurant Billing & Management System",
      "Courier / Logistics Tracking System",
      "Online Shopping Cart Application",
      "E-learning Portal with Quiz Module",
      "Vehicle Parking Management System",
      "Loan Management System",
      "Blood Bank Management System",
      "Railway Reservation System",
      "Supply Chain Management System",
      "Online Polling System",
      "Property Management System",
      "Event Ticket Booking System",
      "Customer Relationship Management (CRM) Tool",
      "Task / Project Management Tool",
      "Warehouse Inventory System",
      "Health Record Management System",
      "Online Quiz / Exam Proctoring System",
      "Digital Library Catalog System",
      "Multi-restaurant Food Ordering Backend",
      "Municipal Services Portal",
    ],
  ),
  ...make(
    "flutter",
    ["Flutter", "Dart", "Firebase"],
    [
      "Fitness & Workout Tracking App",
      "Food Delivery App (Customer + Partner)",
      "Expense / Budget Tracker App",
      "Campus Navigation & Event App",
      "Doctor Consultation & Appointment App",
      "E-commerce Shopping App",
      "Habit Tracker App",
      "Chat / Messaging App with Media Sharing",
      "Ride-sharing / Cab Booking App",
      "Real Estate Browsing App",
      "Recipe & Meal Planner App",
      "Language Learning App",
      "Job Search & Application App",
      "Local Services Booking App",
      "Meditation & Mental Wellness App",
      "Attendance Tracker App (QR / Geo-based)",
      "News Aggregator App",
      "Music / Podcast Streaming App",
      "Event Ticketing App",
      "Personal Finance & Investment Tracker",
      "Parking Finder App",
      "Grocery Ordering App",
      "Skill-sharing / Tutoring App",
      "Lost & Found Campus App",
      "AR-based Furniture Placement App",
      "AI-powered Grooming Guidance App",
    ],
  ),
  ...make(
    "aiml",
    ["Python", "TensorFlow", "scikit-learn"],
    [
      "Fake News Detection using NLP",
      "Credit Card Fraud Detection",
      "Disease Prediction (Diabetes / Heart) using ML",
      "Sentiment Analysis on Social Media Data",
      "Handwritten Digit / Character Recognition",
      "Face Recognition Attendance System",
      "Spam Email / SMS Classifier",
      "Stock Price Prediction using LSTM",
      "Crop Yield / Disease Prediction",
      "Customer Churn Prediction",
      "Movie / Product Recommendation System",
      "Image Classification using CNN",
      "Speech Emotion Recognition",
      "Resume Screening & Candidate Ranking",
      "Traffic Sign Recognition",
      "License Plate Detection & Recognition",
      "Breast Cancer Classification (CNN)",
      "Loan Default Prediction",
      "Object Detection using YOLO",
      "Chatbot using NLP / LLM",
      "Human Activity Recognition",
      "Plant Leaf Disease Detection",
      "Driver Drowsiness Detection",
      "Air Quality Prediction System",
      "Deepfake Detection Model",
      "Resume-to-Job Matching using Embeddings",
    ],
  ),
  ...make(
    "data-science",
    ["Python", "Pandas", "Jupyter"],
    [
      "Customer Segmentation using Clustering",
      "Sales Forecasting & Trend Analysis",
      "Employee Attrition Analysis",
      "COVID-19 Data Analysis & Visualization",
      "Retail Market Basket Analysis",
      "Social Media Trend Analysis",
      "Healthcare Data Analytics Dashboard",
      "Titanic Survival Prediction (EDA + ML)",
      "Housing Price Prediction with Feature Engineering",
      "Customer Lifetime Value Analysis",
      "A/B Testing Analysis for Product Decisions",
      "Supply Chain Analytics",
      "Sports Performance Analytics",
      "Financial Risk Analysis",
      "Time Series Forecasting for Energy Consumption",
      "Text Mining on Product Reviews",
      "HR Analytics Dashboard",
      "Election / Poll Data Analysis",
      "E-commerce Sales Dashboard (Power BI)",
      "Climate Change Data Analysis",
      "Student Performance Prediction",
      "Road Accident Data Analysis",
      "Airline Delay Analysis",
      "Population & Demographic Trend Analysis",
      "YouTube / Netflix Content Trend Analysis",
      "Bank Marketing Campaign Analysis",
    ],
  ),
  ...make(
    "data-analytics",
    ["Power BI", "SQL", "Python"],
    [
      "Business Intelligence Dashboard (Power BI)",
      "Sales Performance Analytics Dashboard",
      "Website Traffic & User Behavior Analytics",
      "Inventory Analytics Dashboard",
      "Marketing Campaign ROI Analysis",
      "HR Analytics & Workforce Dashboard",
      "Financial Statement Analysis Dashboard",
      "Customer Feedback / Review Analytics",
      "Real-time Data Pipeline & Dashboard",
      "Retail Footfall & Sales Correlation Analysis",
      "Social Media Engagement Analytics",
      "Hospital Resource Utilization Dashboard",
      "Logistics & Delivery Performance Dashboard",
      "App Usage Analytics Dashboard",
      "Energy Consumption Analytics",
      "Product Return / Refund Analytics",
      "Loan Approval Analytics Dashboard",
      "E-commerce Cart Abandonment Analysis",
      "University Admission Trend Analytics",
      "Call Center Performance Dashboard",
      "Traffic Pattern Analytics for Smart Cities",
      "Subscription / Churn Analytics Dashboard",
      "Restaurant Sales & Menu Analytics",
      "Insurance Claims Analytics Dashboard",
      "Real Estate Market Analytics",
      "Agricultural Yield Analytics Dashboard",
    ],
  ),
  ...make(
    "digital-electronics",
    ["Arduino", "ESP32", "Sensors"],
    [
      "Smart Home Automation System (IoT)",
      "Automatic Street Light Control System",
      "IoT-based Health Monitoring System",
      "Smart Irrigation System using Soil Sensors",
      "RFID-based Attendance / Access System",
      "Gas Leakage Detection & Alert System",
      "Smart Parking System using IoT",
      "Fire Detection & Alarm System",
      "Solar-powered Smart Energy Meter",
      "Digital Voting Machine using Microcontroller",
      "IoT-based Weather Monitoring Station",
      "Smart Waste Management System",
      "Vehicle Accident Detection & Alert (GPS/GSM)",
      "Home Security System with Motion Detection",
      "Digital Clock using 7-segment Display",
      "Line-following Robot",
      "Obstacle-avoiding Robot",
      "Bluetooth-controlled Home Appliances",
      "Smart Doorbell with Camera Notification",
      "Water Level Indicator & Pump Controller",
      "IoT-based Smart Agriculture Monitoring",
      "Traffic Light Control using Microcontroller",
      "Heart Rate & Temperature Wearable",
      "Smart Mirror using Raspberry Pi",
      "Digital Code Lock System",
      "Wireless Sensor Network for Environment Monitoring",
    ],
  ),
];

export function getCategory(key: string): Category | undefined {
  return categories.find((c) => c.key === key);
}

export function projectsByCategory(key: CategoryKey): Project[] {
  return projects.filter((p) => p.category === key);
}

export function findProject(cat: string, slug: string): Project | undefined {
  return projects.find((p) => p.category === cat && p.slug === slug);
}
