# Healthcare Appointment App

A web app to book doctor appointments, built with React, TypeScript, and Tailwind CSS.

## 🛠️ Tools/Libraries Used
- React
- TypeScript
- Tailwind CSS
- React Router

## 🚀 Improvements with More Time
- Add backend integration (Node.js + Express + MongoDB or Firebase)
- Add authentication (login/signup for users)
- Calendar view for doctor availability
- Search or filter doctors by specialization/location
- Responsive unit tests (using Jest or React Testing Library)
- Error boundary for graceful error handling
- Loading state animations for better UX

## 🧠 Challenges Faced and Solutions
### 1. **Datetime Validation Error**
- **Problem:** The `datetime-local` input was not accepting values and always showed "Please enter a valid value".
- **Solution:** Ensured the input value was a proper ISO format string (`YYYY-MM-DDTHH:MM`), handled with `useState`, and passed correctly to the component.

### 2. **Routing Issues**
- **Problem:** Routing didn't work due to missing `BrowserRouter` wrapper.
- **Solution:** Wrapped `<App />` inside `<BrowserRouter>` in `index.tsx`.

### 3. **Type Errors with Components**
- **Problem:** Props mismatch when rendering custom components (e.g., `DoctorCard`).
- **Solution:** Used TypeScript interfaces properly and ensured correct prop types were passed.

## 📸 Screenshots
- <img width="784" height="538" alt="Screenshot (216)" src="https://github.com/user-attachments/assets/1732e8dd-d47f-420e-a4e8-da17f168cc9b" />
- <img width="778" height="558" alt="Screenshot (215)" src="https://github.com/user-attachments/assets/f93f5aa8-9454-4173-bdd3-c340a03efd2f" />
