import { useState } from 'react'
import { handleLogin } from './assets/api/frontend'
import './App.css'

const stats = [
  { label: 'Total Users', value: '24,891', change: '+12%', color: '#2ea364', icon: '◉' },
  { label: 'Revenue', value: '$184,230', change: '+8.3%', color: '#36bf75', icon: '◈' },
  { label: 'Active Sessions', value: '3,042', change: '+5.1%', color: '#56d591', icon: '◍' },
  { label: 'Bugs Squashed', value: '99', change: '+99%', color: '#6ce3a3', icon: '◎' },
]

const recentActivity = [
  { user: 'Alice Monroe', action: 'Uploaded a new report', time: '2 min ago', avatar: 'AM' },
  { user: 'James Carter', action: 'Closed 3 support tickets', time: '14 min ago', avatar: 'JC' },
  { user: 'Priya Patel', action: 'Deployed to production', time: '1 hr ago', avatar: 'PP' },
  { user: 'Sam Lee', action: 'Updated billing info', time: '3 hr ago', avatar: 'SL' },
  { user: 'Dana Kim', action: 'Added 5 new products', time: 'Yesterday', avatar: 'DK' },
]

const tasks = [
  { title: 'Review Q1 report', done: true },
  { title: 'Fix login bug on mobile', done: false },
  { title: 'Design new onboarding flow', done: false },
  { title: 'Update API docs', done: true },
  { title: 'Team standup @ 10am', done: false },
]

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="logo-mark">◎</span>
          <span className="brand">Big Automation Test Dashy woowoo</span>
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-link active">Overview</a>
          <a href="#" className="nav-link">Analytics</a>
          <a href="#" className="nav-link">Reports</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
        <div className="header-right">
          <button className="notif-btn">◔</button>
          <div className="avatar">BK</div>
        </div>
      </header>

      <main className="main">
        {/* Page title */}
        <div className="page-title">
          <h1>Good morning, Brandon ◌</h1>
          <p>Here's what's happening with your project today.</p>
        </div>

        {/* Signup form from main branch flow */}
        <div className="card signup-card">
          <h2 className="card-title">Create account</h2>
          <form
            id="login"
            name="login"
            className="signup-form"
            onSubmit={async (e) => {
              e.preventDefault()
              await handleLogin({ name, password })
            }}
          >
            <label className="signup-label">
              Enter your name:
              <input
                className="signup-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="signup-label">
              Enter your password:
              <input
                className="signup-input"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="signup-submit" type="submit">Submit</button>
          </form>
        </div>

        {/* Stat cards */}
        <div className="stat-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label} style={{ '--accent': s.color }}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-info">
                <span className="stat-label">{s.label}</span>
                <span className="stat-value">{s.value}</span>
                <span className="stat-change">{s.change} this month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-grid">
          {/* Activity feed */}
          <div className="card activity-card">
            <h2 className="card-title">Recent Activity</h2>
            <ul className="activity-list">
              {recentActivity.map((a, i) => (
                <li className="activity-item" key={i}>
                  <span className="activity-avatar">{a.avatar}</span>
                  <div className="activity-body">
                    <span className="activity-user">{a.user}</span>
                    <span className="activity-action">{a.action}</span>
                  </div>
                  <span className="activity-time">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Task list */}
          <div className="card tasks-card">
            <h2 className="card-title">Tasks</h2>
            <ul className="task-list">
              {tasks.map((t, i) => (
                <li className="task-item" key={i}>
                  <span className={`task-check ${t.done ? 'done' : ''}`}>{t.done ? '●' : '○'}</span>
                  <span className={`task-title ${t.done ? 'task-done' : ''}`}>{t.title}</span>
                </li>
              ))}
            </ul>
            <button className="add-task-btn">+ Add Task</button>
          </div>

          {/* Fake chart card */}
          <div className="card chart-card">
            <h2 className="card-title">Weekly Traffic</h2>
            <div className="bar-chart">
              {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
                <div className="bar-wrap" key={i}>
                  <div className="bar" style={{ height: `${h}%` }} />
                  <span className="bar-label">{['M','T','W','T','F','S','S'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
