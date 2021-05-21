function findEmployeesRole(name) {
  const splitName = name.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[1];

  for (const employee in employees) {
    if (
      employees[employee].firstName === firstName &&
      employees[employee].lastName === lastName
    ) {
      return employees[employee].role;
    }
  }
  return "Does not work here!";
}
