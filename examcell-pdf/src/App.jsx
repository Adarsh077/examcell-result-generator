import { useEffect, useState } from "react";
import MarksheetTable from "./MarksheetTable";
import axios from "axios";

export default function App() {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const semesterId = pathname.split("/").slice(-1)[0];
    handleLoadResultForSemester(semesterId);
  }, []);

  const handleLoadResultForSemester = async (semesterId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_BASE_URL}/semesters/${semesterId}/result`
    );
    if (response.data && response.data?.body?.result?.data) {
      setStudents(response.data?.body?.result?.data?.students);
      setSubjects(response.data?.body?.result?.data?.subjects);
    }
  };

  const sortedSubjects = subjects.sort((a, b) => a.code.localeCompare(b.code));

  return (
    <div className="flex items-center justify-center h-screen">
      <MarksheetTable
        studentRecords={students}
        subjects={sortedSubjects}
        maxTotal={800}
      />
    </div>
  );
}
