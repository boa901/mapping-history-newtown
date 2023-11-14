type Resident = {
  original_order: number,
  street_no: string | null,
  street_name: string | null,
  owner: boolean | null,
  profession: string | null,
  name: string | null,
  sex: string | null,
  marital_status: string | null,
  relationship: string | null,
  census_race: string | null,
  birthplace: string | null,
  father_birthplace: string | null,
  mother_birthplace: string | null,
  birth_year: number | null,
  age: number | null,
  cost: number | null,
};

export default Resident;
