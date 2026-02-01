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
- **Styling**: Tailwind CSS + Radix UI (shadcn/ui)
- **State Management**: Context API + Custom Hooks
- **AI**: Microsoft Azure Cognitive Services (integration ready)
- **Icons**: Lucide React
- **Routing**: React Router v6

---

## ✅ Features Implemented

✅ **Onboarding flow** (role selection, location, calendar connection)  
✅ **Today's Shift timeline** with intelligent break suggestions  
✅ **Accept/Move/Dismiss breaks** with user control  
✅ **Difficult Event support flow** based on NHS postvention guidance  
✅ **Fatigue warning system** (triggers after 6h without break)  
✅ **End-of-shift sleepiness check** with driving safety alerts  
✅ **Shift swap functionality** with consecutive night warnings  
✅ **Peer chat** with quick reply templates for support culture  
✅ **Night shift mode** with optimized meal/hydration timing  
✅ **AI chatbot interface** (Microsoft Azure integration ready)  

---

## 🚀 Quick Start

### Using Lovable (Easiest)

1. Visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
2. Click "Share" → "Preview" to see the live app
3. Or click "Publish" to deploy publicly

### Local Development

```bash
# Clone repository
git clone https://github.com/riddhi1104-bit/shift-companion.git
cd shift-companion

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
