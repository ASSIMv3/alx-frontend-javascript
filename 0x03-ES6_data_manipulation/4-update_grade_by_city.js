export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr) || !Array.isArray(newGrades)) {
    return [];
  }

  return arr
    .filter((student) => student.location === city)
    .map((student) => {
      const studentCopy = { ...student };
      const studentGradeObj = newGrades.find(
        (gradeObj) => gradeObj.studentId === studentCopy.id,
      );
      studentCopy.grade = studentGradeObj ? studentGradeObj.grade : 'N/A';
      return studentCopy;
    });
}
