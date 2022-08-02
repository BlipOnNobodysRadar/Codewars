// 8 kyu Job Matching #1
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw "Problem.";
  return candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary;
}
