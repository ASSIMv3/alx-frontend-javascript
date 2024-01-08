export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) return [];

  return arr.reduce((prevs, student) => prevs + student.id, 0);
}
