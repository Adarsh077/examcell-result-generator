const studentRecords = [
  {
    seatNo: "CC23156051",
    name: "SENGHANI ADARSH KISHOR KOKILA",
    sgpi: 6.0,
    result: "P",
    cgpi: 7.05,
    marks: {
      MarksO: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "39",
            },
            {
              name: "IA",
              marks: "10",
            },
            {
              name: "TOT",
              marks: "49",
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "41",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "52",
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "32",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "43",
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "32",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "43",
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "43",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "54",
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "15",
            },
            {
              name: "TOT",
              marks: "33",
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "PR OR",
              marks: "21",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "37",
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "PR OR",
              marks: "19",
            },
            {
              name: "TW",
              marks: "18",
            },
            {
              name: "TOT",
              marks: "37",
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "34",
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "34",
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "PR OR",
              marks: "21",
            },
            {
              name: "TW",
              marks: "20",
            },
            {
              name: "TOT",
              marks: "41",
            },
          ],
        },
      ],
      MarksOTotal: 457,
      Grade: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "E",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "E",
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "D",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "D",
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "P",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "P",
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "P",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "P",
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "D",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "D",
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "B",
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "O",
            },
            {
              name: "TOT",
              marks: "O",
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "O",
            },
            {
              name: "TOT",
              marks: "O",
            },
          ],
        },
      ],
      GradeTotal: "",
      C: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 2,
            },
          ],
        },
      ],
      CTotal: 22,
      GPC: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 15,
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 18,
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 12,
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 12,
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 18,
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 8,
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 8,
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 20,
            },
          ],
        },
      ],
      GPCTotal: 132,
    },
  },
  {
    seatNo: "CC23156051",
    name: "KHAIR AKSHAT SANDEEP SANJANA",
    sgpi: 6.0,
    result: "P",
    cgpi: 7.05,
    marks: {
      MarksO: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "39",
            },
            {
              name: "IA",
              marks: "10",
            },
            {
              name: "TOT",
              marks: "49",
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "41",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "52",
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "32",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "43",
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "32",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "43",
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "43",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "54",
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "15",
            },
            {
              name: "TOT",
              marks: "33",
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "PR OR",
              marks: "21",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "37",
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "PR OR",
              marks: "19",
            },
            {
              name: "TW",
              marks: "18",
            },
            {
              name: "TOT",
              marks: "37",
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "34",
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "34",
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "PR OR",
              marks: "21",
            },
            {
              name: "TW",
              marks: "20",
            },
            {
              name: "TOT",
              marks: "41",
            },
          ],
        },
      ],
      MarksOTotal: 457,
      Grade: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "E",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "E",
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "D",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "D",
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "P",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "P",
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "P",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "P",
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "D",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "D",
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "B",
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "O",
            },
            {
              name: "TOT",
              marks: "O",
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "O",
            },
            {
              name: "TOT",
              marks: "O",
            },
          ],
        },
      ],
      GradeTotal: "",
      C: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 2,
            },
          ],
        },
      ],
      CTotal: 22,
      GPC: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 15,
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 18,
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 12,
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 12,
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 18,
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 8,
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 8,
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 20,
            },
          ],
        },
      ],
      GPCTotal: 132,
    },
  },
  {
    seatNo: "CC23156051",
    name: "KACHWALA TAHER ZUZER INSIYA",
    sgpi: 6.0,
    result: "P",
    cgpi: 7.05,
    marks: {
      MarksO: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "39",
            },
            {
              name: "IA",
              marks: "10",
            },
            {
              name: "TOT",
              marks: "49",
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "41",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "52",
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "32",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "43",
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "32",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "43",
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "43",
            },
            {
              name: "IA",
              marks: "11",
            },
            {
              name: "TOT",
              marks: "54",
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "15",
            },
            {
              name: "TOT",
              marks: "33",
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "PR OR",
              marks: "21",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "37",
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "PR OR",
              marks: "19",
            },
            {
              name: "TW",
              marks: "18",
            },
            {
              name: "TOT",
              marks: "37",
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "34",
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "PR OR",
              marks: "18",
            },
            {
              name: "TW",
              marks: "16",
            },
            {
              name: "TOT",
              marks: "34",
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "PR OR",
              marks: "21",
            },
            {
              name: "TW",
              marks: "20",
            },
            {
              name: "TOT",
              marks: "41",
            },
          ],
        },
      ],
      MarksOTotal: 457,
      Grade: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "E",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "E",
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "D",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "D",
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "P",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "P",
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "P",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "P",
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "D",
            },
            {
              name: "IA",
              marks: "D",
            },
            {
              name: "TOT",
              marks: "D",
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "B",
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "O",
            },
            {
              name: "TOT",
              marks: "O",
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "PR OR",
              marks: "B",
            },
            {
              name: "TW",
              marks: "C",
            },
            {
              name: "TOT",
              marks: "C",
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "PR OR",
              marks: "O",
            },
            {
              name: "TW",
              marks: "O",
            },
            {
              name: "TOT",
              marks: "O",
            },
          ],
        },
      ],
      GradeTotal: "",
      C: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 3,
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 1,
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 2,
            },
          ],
        },
      ],
      CTotal: 22,
      GPC: [
        {
          subjectCode: "ITC601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 15,
            },
          ],
        },
        {
          subjectCode: "ITC602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 18,
            },
          ],
        },
        {
          subjectCode: "ITC603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 12,
            },
          ],
        },
        {
          subjectCode: "ITC604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 12,
            },
          ],
        },
        {
          subjectCode: "ITDO6014",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 18,
            },
          ],
        },
        {
          subjectCode: "ITL601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITL602",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 8,
            },
          ],
        },
        {
          subjectCode: "ITL603",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 8,
            },
          ],
        },
        {
          subjectCode: "ITL604",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITL605",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 7,
            },
          ],
        },
        {
          subjectCode: "ITM601",
          exams: [
            {
              name: "ESE",
              marks: "",
            },
            {
              name: "IA",
              marks: "",
            },
            {
              name: "TOT",
              marks: 20,
            },
          ],
        },
      ],
      GPCTotal: 132,
    },
  },
];

export default studentRecords;
