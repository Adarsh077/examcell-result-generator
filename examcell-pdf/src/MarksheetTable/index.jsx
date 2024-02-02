import { v4 as uuid } from "uuid";

const MarksheetTable = (props) => {
  const { subjects = [], maxTotal, studentRecords } = props;
  console.log({ subjects });
  return (
    <div className="ritz grid-container" dir="ltr">
      <table
        className="waffle"
        cellSpacing={0}
        cellPadding={0}
        width="100%"
        style={{ borderTop: "1px solid #000" }}
      >
        <tbody>
          <tr>
            <th
              id="1886889848R1"
              style={{ height: 35 }}
              className="row-headers-background"
            />
            <td className="s2" />
            <td
              className="s3"
              dir="ltr"
              colSpan={9 + 3 * subjects.length}
              rowSpan={3}
            >
              Vidya Vikas Education Trust&apos;s
              <br />
              <span style={{ fontSize: "14pt", fontWeight: "bold" }}>
                UNIVERSAL COLLEGE OF ENGINEERING, KAMAN.
              </span>
              <span style={{ fontWeight: "bold" }}>
                <br />
              </span>
              <span style={{ fontSize: "15pt" }}>
                Kaman Bhiwandi Road, Survey no.146 (Part), Village Kaman, Taluka
                - Vasai, District - Palghar - 401208
              </span>
              <br />
              <span style={{ fontSize: "14pt", fontWeight: "bold" }}>
                Result Sheet for T.E. Information Technology, (Semester VI), C
                SCHEME , Exam : May 2023 (Regular)
              </span>
            </td>
          </tr>
          <tr style={{ height: 38 }}>
            <th
              id="1886889848R2"
              style={{ height: 38 }}
              className="row-headers-background"
            />
            <td className="s2" />
          </tr>
          <tr style={{ height: 42 }}>
            <th
              id="1886889848R3"
              style={{ height: 42 }}
              className="row-headers-background"
            />
            <td className="s2" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="1886889848R4"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s2" />
            <td className="s4" dir="ltr" colSpan={3} rowSpan={2}>
              Courses
            </td>
            <td className="s5" rowSpan={2} />
            {subjects.map((subject) => {
              return (
                <td key={uuid()} className="s6" dir="ltr" colSpan={3}>
                  {subject.code}
                </td>
              );
            })}

            <td
              className="s4"
              dir="ltr"
              rowSpan={3}
              width={40}
              style={{ maxWidth: 40, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
                }}
              >
                Total
              </div>
            </td>
            <td
              className="s4"
              dir="ltr"
              rowSpan={5}
              width={40}
              style={{ maxWidth: 40, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
                }}
              >
                SGPI (GPA)
              </div>
            </td>
            <td
              className="s4"
              dir="ltr"
              rowSpan={5}
              width={40}
              style={{ maxWidth: 40, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
                }}
              >
                RESULT
              </div>
            </td>
            <td
              className="s4"
              dir="ltr"
              rowSpan={5}
              width={40}
              style={{ maxWidth: 40, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
                }}
              >
                CGPI
              </div>
            </td>
            <td
              className="s4"
              dir="ltr"
              rowSpan={5}
              width={40}
              style={{ maxWidth: 40, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
                }}
              >
                RLE
              </div>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="1886889848R5"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s2" />
            {subjects.map((subject) => {
              return (
                <td
                  key={uuid()}
                  className="s6"
                  dir="ltr"
                  width={150}
                  style={{
                    whiteSpace: "pre-line",
                    verticalAlign: "middle",
                    height: 50,
                  }}
                  colSpan={3}
                >
                  {subject.name}
                </td>
              );
            })}
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="1886889848R6"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s2" />
            <td className="s4" dir="ltr" colSpan={3} rowSpan={3}>
              Seat No / Name of Student
            </td>
            <td className="s6" />
            {subjects.map((subject) => {
              return subject.exams.map((exam) => {
                return (
                  <td key={uuid()} className="s6" dir="ltr">
                    {exam.name}
                  </td>
                );
              });
            })}
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="1886889848R7"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s2" />
            <td className="s6" dir="ltr">
              MaxM
            </td>
            {subjects.map((subject) => {
              return subject.exams.map((exam) => {
                return (
                  <td key={uuid()} className="s6" dir="ltr">
                    {exam.maxMarks}
                  </td>
                );
              });
            })}
            <td className="s6" dir="ltr">
              {maxTotal}
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="1886889848R8"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s2" />
            <td className="s6" dir="ltr">
              MinM
            </td>
            {subjects.map((subject) => {
              return subject.exams.map((exam) => {
                return (
                  <td key={uuid()} className="s6" dir="ltr">
                    {exam.minMarks}
                  </td>
                );
              });
            })}
            <td className="s5" />
          </tr>
          {studentRecords.map((record) => {
            return [
              <tr key={uuid()} style={{ height: 20 }}>
                <th
                  id="1886889848R9"
                  style={{ height: 20 }}
                  className="row-headers-background"
                />
                <td className="s2" />
                <td className="s7" dir="ltr" colSpan={3}>
                  {record.seatNo}
                </td>
                <td className="s7">MarksO</td>
                {subjects.map((subject) => {
                  const MarksOForSubject = record.marks.MarksO.find(
                    (marksOObject) => marksOObject.subjectCode === subject.code
                  );
                  if (!MarksOForSubject) return null;
                  return subject.exams.map((exam) => {
                    const MarksOForExam = MarksOForSubject.exams.find(
                      (marksOExamObject) => marksOExamObject.name === exam.name
                    );
                    if (!MarksOForExam) return null;
                    return (
                      <td key={uuid()} className="s7">
                        {MarksOForExam.marks}
                      </td>
                    );
                  });
                })}
                <td className="s7">{record.marks.MarksOTotal}</td>
                <td className="s7" rowSpan={4}>
                  {record.sgpi}
                </td>
                <td className="s7" rowSpan={4}>
                  {record.result}
                </td>
                <td className="s7" rowSpan={4}>
                  {record.cgpi}
                </td>
                <td className="s9" rowSpan={4} />
              </tr>,
              <tr key={uuid()} style={{ height: 20 }}>
                <th
                  id="1886889848R10"
                  style={{ height: 20 }}
                  className="row-headers-background"
                />
                <td className="s2" />
                <td className="s7" dir="ltr" colSpan={3} rowSpan={3}>
                  {record.name}
                </td>
                <td className="s7">Grade</td>
                {subjects.map((subject) => {
                  const GradeForSubject = record.marks.Grade.find(
                    (marksOObject) => marksOObject.subjectCode === subject.code
                  );
                  if (!GradeForSubject) return null;
                  return subject.exams.map((exam) => {
                    const GradeForExam = GradeForSubject.exams.find(
                      (marksOExamObject) => marksOExamObject.name === exam.name
                    );
                    if (!GradeForExam) return null;
                    return (
                      <td key={uuid()} className="s7">
                        {GradeForExam.marks}
                      </td>
                    );
                  });
                })}
                <td className="s9" />
              </tr>,
              <tr key={uuid()} style={{ height: 20 }}>
                <th
                  id="1886889848R11"
                  style={{ height: 20 }}
                  className="row-headers-background"
                />
                <td className="s2" />
                <td className="s7">C</td>
                {subjects.map((subject) => {
                  const CForSubject = record.marks.C.find(
                    (marksOObject) => marksOObject.subjectCode === subject.code
                  );
                  if (!CForSubject) return null;
                  return subject.exams.map((exam) => {
                    const CForExam = CForSubject.exams.find(
                      (marksOExamObject) => marksOExamObject.name === exam.name
                    );
                    // if (!CForExam) return null;
                    return (
                      <td key={uuid()} className="s7">
                        {CForExam?.marks}
                      </td>
                    );
                  });
                })}
                <td className="s7">{record.marks.CTotal}</td>
              </tr>,
              <tr key={uuid()} style={{ height: 20 }}>
                <th
                  id="1886889848R11"
                  style={{ height: 20 }}
                  className="row-headers-background"
                />
                <td className="s2" />
                <td className="s7">GC*P</td>
                {subjects.map((subject) => {
                  const GPCForSubject = record.marks.GPC.find(
                    (marksOObject) => marksOObject.subjectCode === subject.code
                  );
                  if (!GPCForSubject) return null;
                  return subject.exams.map((exam) => {
                    const GPCForExam = GPCForSubject.exams.find(
                      (marksOExamObject) => marksOExamObject.name === exam.name
                    );
                    return (
                      <td key={uuid()} className="s7">
                        {GPCForExam?.marks}
                      </td>
                    );
                  });
                })}
                <td className="s7">{record.marks.GPCTotal}</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
};
export default MarksheetTable;
