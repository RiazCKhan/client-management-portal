export default function SingleClientListItem() {
  return (
    <tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {/* Map Client Name */} John Doe
      </th>
      <td className="px-6 py-4">
        {/* Map Client Program Arr or Obj? */} AM | RP | IND
      </td>
      <td className="px-6 py-4">
        {/* Map Arr.length */} Stars
      </td>
      <td className="px-6 py-4">
        {/* Value = Num */} 12
      </td>
      <td className="px-6 py-4 text-right">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
    </tr>
  )
}