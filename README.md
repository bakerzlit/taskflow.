# ✨ TaskFlow AI

A beautiful, modern task management app with **AI-powered plan generation**. Create tasks, break them into smart steps with deadlines, and track your progress — all in a sleek dark-themed interface.

![TaskFlow AI](https://img.shields.io/badge/Built_with-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Server-Express-000000?style=flat-square&logo=express&logoColor=white)
![Groq](https://img.shields.io/badge/AI-Groq_LLaMA_3.3-F55036?style=flat-square)

---

## 🚀 Features

- **AI Plan Generator** — Describe your task and deadline, and AI creates a logical step-by-step plan with dates automatically distributed across your timeline
- **Task Management** — Add, edit, complete, and delete tasks with notes, priority levels, and due dates
- **Step Tracking** — Break tasks into granular steps with individual due dates and completion tracking
- **Progress Visualization** — Visual progress bars and completion percentages for each task
- **Checkpoints** — Save snapshots of your progress at any point
- **Smart Reminders** — Automatic alerts for overdue and upcoming tasks
- **Dark Theme** — Elegant, modern dark UI with smooth animations
- **Local Storage** — All data saved in your browser — no account needed

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Groq API key](https://console.groq.com/keys) (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bakerzlit/taskflow.git
   cd taskflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**

   Create a `.env` file in the root directory:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**

   Navigate to [http://localhost:8080/taskflow-ai.html](http://localhost:8080/taskflow-ai.html)

> **💡 Tip (Windows):** You can also just double-click `launch-taskflow.bat` to start the server and open the app automatically!

---

## 🤖 AI Plan Generation

1. Add a new task
2. Expand it and click **✨ AI Plan**
3. Enter a description, start date, and deadline
4. The AI generates 5–10 actionable steps with smart date distribution

Powered by **Groq** using the **LLaMA 3.3 70B** model for fast, high-quality plan generation.

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | HTML, CSS, Vanilla JS   |
| Backend    | Node.js, Express        |
| AI         | Groq API (LLaMA 3.3)   |
| Storage    | Browser LocalStorage    |

---

## 📁 Project Structure

```
taskflow-ai/
├── taskflow-ai.html    # Main app (frontend)
├── server.js           # Express server & AI proxy
├── .env                # API key (not tracked by git)
├── .gitignore          # Git exclusions
├── package.json        # Dependencies & scripts
└── launch-taskflow.bat # Windows quick-launch script
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
