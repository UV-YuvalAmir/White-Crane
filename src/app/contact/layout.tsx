import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר",
  description:
    "צרו קשר עם מרכז עגור לבן. פרטי התקשרות, כתובת, טלפון ושעות פעילות. נשמח לענות על כל שאלה בנושא שיעורים, קורסים וטיפולים.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
