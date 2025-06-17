function minDate(dates) {
  // Use the spread operator to clone the array and avoid mutation
  return [...dates].sort()[0];
}
