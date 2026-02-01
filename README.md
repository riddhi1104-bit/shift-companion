# ShiftBuddy - AI-Powered NHS Shift Companion

<div align="center">
  
  **Built for Imperial HealthHack 2026** 🏆
  
  An AI-powered shift companion that helps NHS healthcare workers manage fatigue, structure breaks, and access trauma support.

  [![Tech Stack](https://img.shields.io/badge/React_18-TypeScript-blue)](.)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  
</div>

---

## 🏥 The Problem

**50% of NHS staff report burnout.** The reality of NHS shifts:
- 12-hour days without proper breaks
- 3+ consecutive nights with inadequate recovery  
- Patient deaths with no structured support
- Unsafe fatigue driving home after shift

**Current solutions don't help healthcare workers get through actual shifts safely.**

---

## 💡 Our Solution: ShiftBuddy

An AI-powered shift companion that sits on top of your rota and provides:

### 🗓️ Shift-Aware Planning
Structures breaks, meals, and hydration around actual 12-hour days and nights

### ⚠️ Safety Guardrails
- Detects risky patterns (3+ consecutive nights, 36h stretches)
- "Too tired to drive?" check at shift end
- Fatigue warnings after 6 hours without break

### 💙 Trauma Support
- Patient death flow: Pause → Decompression → Follow-up
- Based on NHS postvention guidance
- Support resource signposting

### 🤖 AI-Powered Personalization
Microsoft Azure-powered chatbot learns your shift patterns and personalizes recommendations over time

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI (shadcn)
- **State Management**: Context API
- **AI**: Microsoft Azure Cognitive Services (integration ready)
- **Icons**: Lucide React
- **Routing**: React Router v6

---

## ✅ Features Implemented

✅ Onboarding flow (role, location, calendar connect)  
✅ Today's Shift timeline with accept/move/dismiss breaks  
✅ Difficult Event support flow with NHS postvention guidance  
✅ Fatigue warning system (>6h without break)  
✅ End-of-shift sleepiness check + driving safety  
✅ Shift swap view with consecutive night warnings  
✅ Peer chat with quick reply templates  
✅ Night shift mode (optimized meal/hydration rules)  
✅ AI chatbot interface (Azure integration planned)  

---

## 🚀 Quick Start

```bash
# Clone repo
git clone https://github.com/riddhi1104-bit/shift-companion.git
cd shift-companion

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:5173
