'use client';

import { useEffect, useState } from 'react';

import Resident from '@/modules/common/types/Resident';

export default function HouseholdView({
  house,
}: {
  house: {
    street_no: string,
    street_name: string,
  } | undefined
}) {
  const [residents, setResidents] = useState<Resident[]>();

  useEffect(() => {
    const fetchResidents = async () => {
      if (house) {
        const params = new URLSearchParams(house);
        const { data: results } = await fetch(`/api/residents?${params.toString()}`)
          .then((res) => res.json());

        setResidents(results);
      }
    };

    fetchResidents();
  }, [house]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Profession</th>
          <th>Marital Status</th>
          <th>Relationship</th>
          <th>Birth Year</th>
        </tr>
      </thead>
      <tbody>
        {residents?.map((resident) => (
          <tr>
            <td>{resident.name}</td>
            <td>{resident.sex}</td>
            <td>{resident.profession}</td>
            <td>{resident.marital_status}</td>
            <td>{resident.relationship}</td>
            <td>{resident.birth_year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
