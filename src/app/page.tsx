'use client'

import { useState } from "react"
import contacts from "@/data/contacts.json"

export default function Home({ }) {
  const countries = [...new Set(contacts.map(contact => contact.address))]
  const [query, setQuery] = useState("")
  const [selectedCountries, setSelectedCountries] = useState([])

  function filterByQuery(contacts) {
    return contacts.filter(contact => Object.values(contact).some(value =>
      value.toLowerCase().includes(query.toLowerCase())))
  }

  function filterByCountry(contacts) {
    if (!selectedCountries.length) return contacts
    return contacts.filter(contact => selectedCountries.includes(contact.address))
  }

  function filter(contacts) {
    return filterByCountry(filterByQuery(contacts))
  }

  return (
    <main className="container mx-auto mt-4">
      <div>
        <div className="flex gap-2">
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="text-black border p-2" />
          <select multiple className="text-black p-2" value={selectedCountries} onChange={e => setSelectedCountries(Array.from(e.target.selectedOptions, option => option.value))}>

            {
              countries.map(country => <option value={country}>{country}</option>)
            }
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {
              filter(contacts).map(({ name, email, phone, company, address }) => (
                <tr>
                  <td>{name}</td>
                  <td>{company}</td>
                  <td>{email}</td>
                  <td>{phone}</td>

                  <td>{address}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </main >
  )
}
