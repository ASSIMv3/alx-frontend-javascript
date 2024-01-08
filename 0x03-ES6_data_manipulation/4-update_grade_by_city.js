export default function updateStudentGradeByCity(arr, city, grad) {
  if (!Array.isArray(arr) || !Array.isArray(grad)) return [];

  return arr
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      studentgrade:
        grad
          .filter((g) => g.studentId === student.id)
          .map((g) => g.studentgrade)[0] || 'N/A',
    }));
}
