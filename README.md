# New Booking Entry – Logistics ERP Form

This project is a **New Booking Entry screen** for a Logistics ERP system. It is designed for office administrators to quickly and accurately enter shipment details.

The focus of this implementation is:

* Data-dense ERP UI
* Keyboard-friendly form interactions
* Clean component reusability
* Type-safe React code

---

##  Tech Stack

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite** (for fast development)

---

##  Features

* Structured form with 3 sections:

  * Sender Details
  * Receiver Details
  * Package Details
* Responsive ERP layout:

  * Desktop: Sender & Receiver side-by-side
  * Mobile: Stacked layout
* Auto-calculation of Total Shipping Cost (`weight × rate`)
* Inline validation with error messages
* Submit button appears only when required fields are filled
* Reusable components (`FormInput`, `FormTextArea`, `SectionWrapper`)
* Type-safe event handling

---

##  Project Structure

```
src/
 ├─ components/
 │   ├─ FormInput.tsx
 │   ├─ FormTextArea.tsx
 │   └─ SectionWrapper.tsx
 ├─ pages/
 │   └─ NewBooking.tsx
 ├─ App.tsx
 └─ main.tsx
```

---

##  Getting Started

### 1️ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

###  Install dependencies

```bash
npm install
```

