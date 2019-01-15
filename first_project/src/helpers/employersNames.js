const employers = [
  'Alex', '', 'ludmila', 'Viktor',
  '', 'oleg', 'iNna', 'Ivan',
  'Alex', 'Olga', ' Ann'];


const names = [];
employers.forEach((employer) => {
  if (employer.length > 0 && employer.length !== '') {
    names.push(employer);
  }
});

export const employersNames = names
  .map(employersName => employersName.toLowerCase().trim());
