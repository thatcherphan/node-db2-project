
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'KJSGEDUYG8273', make: "Lexus", mileage: 72500,transmission_type: "v6", title_status: ""},
        {VIN: 'OUWNJDF2874NJ', make: "Mercedes", mileage: 8780,transmission_type: "v8", title_status: ""},
        {VIN: 'FQTGHFB23HYGJ', make: "Porsche", mileage: 100200,transmission_type: "", title_status: ""},
        {VIN: 'POIOJFSHJ2873', make: "Toyota", mileage: 37653,transmission_type: "", title_status: "salvage"},
        {VIN: 'YTEBS264987BF', make: "Fiat", mileage: 24890,transmission_type: "", title_status: ""},
        {VIN: 'KJSFH763HRUEO', make: "BMw", mileage: 124674,transmission_type: "", title_status: "clean"}
      ]);
    });
};
