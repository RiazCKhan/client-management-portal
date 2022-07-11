import SingleClientListItem from "./SingleClientListItem"

export default function SingleClient() {
  return (
    <section classNameName="">
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Client Name
              </th>
              <th scope="col" className="px-6 py-3">
                Program
              </th>
              <th scope="col" className="px-6 py-3">
                Session Count
              </th>
              <th scope="col" className="px-6 py-3">
                Total Sessions
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <SingleClientListItem />
          </tbody>
        </table>
      </div>
    </section>

  )
}