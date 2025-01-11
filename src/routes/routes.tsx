import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
import MorePage from "@components/pages/MorePage";

const HomePage = lazy(() => import("@components/pages/HomePage"));
const ProjectPage = lazy(() => import("@components/pages/ProjectPage"));
const ContactPage = lazy(() => import("@components/pages/ContactPage"));
const SkillsPage = lazy(() => import("@components/pages/SkillsPage"));
const EducationPage = lazy(() => import("@components/pages/EducationPage"));
const ExperiencePage = lazy(() => import("@components/pages/ExperiencePage"));

const AppRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/education" element={<EducationPage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/more" element={<MorePage/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default AppRoutes;
