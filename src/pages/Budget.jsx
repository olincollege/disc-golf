function Budget() {
  const bomItems = [
    {
      component: "Arduino Mega 2560",
      source: "Amazon",
      quantity: 1,
      unitCost: 45.99,
      totalCost: 45.99,
      notes: "Microcontroller"
    },
    {
      component: "DC Motor (12V, 100 RPM)",
      source: "Pololu",
      quantity: 2,
      unitCost: 24.95,
      totalCost: 49.90,
      notes: "Drive motors"
    },
    {
      component: "Motor Driver (L298N)",
      source: "Adafruit",
      quantity: 1,
      unitCost: 19.95,
      totalCost: 19.95,
      notes: "H-bridge motor controller"
    },
    {
      component: "Ultrasonic Sensors (HC-SR04)",
      source: "SparkFun",
      quantity: 3,
      unitCost: 3.95,
      totalCost: 11.85,
      notes: "Distance sensing"
    },
    {
      component: "12V Power Supply (5A)",
      source: "DigiKey",
      quantity: 1,
      unitCost: 18.50,
      totalCost: 18.50,
      notes: "Main power"
    },
    {
      component: "3D Printer Filament (PLA)",
      source: "MatterHackers",
      quantity: 1,
      unitCost: 21.99,
      totalCost: 21.99,
      notes: "Custom brackets and mounts"
    },
    {
      component: "Acrylic Sheet (12\"×24\")",
      source: "TAP Plastics",
      quantity: 2,
      unitCost: 15.00,
      totalCost: 30.00,
      notes: "Structural panels"
    },
    {
      component: "Scrap Aluminum Stock",
      source: "Machine Shop",
      quantity: 1,
      unitCost: 0.00,
      totalCost: 0.00,
      notes: "Estimated value: $15.00"
    },
    {
      component: "Assorted Hardware (screws, nuts, bolts)",
      source: "Hardware Store",
      quantity: 1,
      unitCost: 12.50,
      totalCost: 12.50,
      notes: "M3 and M5 fasteners"
    },
    {
      component: "Wire and Connectors",
      source: "Electrical Lab",
      quantity: 1,
      unitCost: 8.75,
      totalCost: 8.75,
      notes: "22 AWG wire, JST connectors"
    }
  ]

  const totalSpent = bomItems.reduce((sum, item) => sum + item.totalCost, 0)
  const estimatedValue = totalSpent + 15.00 // Adding the estimated value of scrap aluminum

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 accent-line text-center">
        Bill of Materials (BOM)
      </h1>

      <div className="overflow-hidden shadow-lg rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Component
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Cost
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bomItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.component}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {item.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                    ${item.unitCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                    ${item.totalCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-white">
              <tr>
                <td colSpan="4" className="px-6 py-4 text-sm font-bold text-gray-900 text-right">
                  Total Spent:
                </td>
                <td className="px-6 py-4 text-sm font-bold text-blue-600 text-right">
                  ${totalSpent.toFixed(2)}
                </td>
                <td className="px-6 py-4"></td>
              </tr>
              <tr>
                <td colSpan="4" className="px-6 py-4 text-sm font-bold text-gray-900 text-right">
                  Total Estimated Value:
                </td>
                <td className="px-6 py-4 text-sm font-bold text-green-600 text-right">
                  ${estimatedValue.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  (including free materials)
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Budget Notes */}
      <div className="mt-6 glass-card rounded-lg p-6 hover-lift bg-blue-900/20">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Budget Notes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>All prices are in USD and reflect actual purchase costs (or estimated market value for free materials).</li>
          <li>The scrap aluminum was obtained from the machine shop at no cost, but has an estimated market value of $15.00.</li>
          <li>Some components like wire and connectors were available from existing lab stock.</li>
          <li>The project stayed well within the $300 budget constraint for the course.</li>
        </ul>
      </div>
    </div>
  )
}

export default Budget

