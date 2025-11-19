function Budget() {
  const bomItems = [
    {
      component: "Electronic Gas Valve",
      source: "Amazon",
      quantity: 1,
      unitCost: 15.99,
      totalCost: 15.99,
      notes: "1/4\" NPT 12V/24V/110V/220V solenoid valve (Stretch Goal - Pneumatics)"
    },
    {
      component: "Pneumatic Tubing",
      source: "Amazon",
      quantity: 1,
      unitCost: 15.99,
      totalCost: 15.99,
      notes: "1/4\" OD PU air hose, 32.8 ft kit (Stretch Goal - Pneumatics)"
    },
    {
      component: "Pneumatic System Pressure Sensor",
      source: "Amazon",
      quantity: 1,
      unitCost: 15.79,
      totalCost: 15.79,
      notes: "0-150 PSI sensor, 1/4\" NPT, 316 stainless steel (Stretch Goal - Pneumatics)"
    },
    {
      component: "Pressure Sensor Connector",
      source: "McMaster Carr",
      quantity: 1,
      unitCost: 3.96,
      totalCost: 3.96,
      notes: "Push-to-connect fitting, 1/4\" tube OD x 1/4\" NPT female (Stretch Goal - Pneumatics)"
    },
    {
      component: "Raspberry Pi Camera Module 3",
      source: "Amazon",
      quantity: 1,
      unitCost: 25.00,
      totalCost: 25.00,
      notes: "Autofocus camera module (Stretch Goal - AI Vision)"
    },
    {
      component: "22-Pin to 22-Pin FPC Cable",
      source: "Amazon",
      quantity: 1,
      unitCost: 6.69,
      totalCost: 6.69,
      notes: "Flexible ribbon cable for Pi Camera connection (Stretch Goal - AI Vision)"
    },
    {
      component: "Rotary Encoder (Speed Sensor)",
      source: "Amazon",
      quantity: 1,
      unitCost: 8.99,
      totalCost: 8.99,
      notes: "LM393 speed sensor module for load sensing (MVP Core)"
    }
  ]

  const totalSpent = bomItems.reduce((sum, item) => sum + item.totalCost, 0)
  const estimatedValue = totalSpent

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3 accent-line text-center">
        Bill of Materials (BOM)
      </h1>
      <p className="text-gray-600 text-lg mb-12 text-center">
        Component costs for stretch goal features: pneumatic cleaning system and AI vision detection.
      </p>

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
                  Total Cost:
                </td>
                <td className="px-6 py-4 text-sm font-bold text-blue-600 text-right">
                  ${totalSpent.toFixed(2)}
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Budget Notes */}
      <div className="mt-6 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Budget Notes
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>All prices are in USD and reflect actual purchase costs from Amazon and McMaster Carr.</li>
          <li>The <strong>Rotary Encoder</strong> is the only MVP core component shown - other core components (Raspberry Pi 5, Nema 23 motor, TB6600 driver, servo motor, chuck materials, enclosure) are not included in this list.</li>
          <li>The majority of components listed are for <strong>Stretch Goals</strong>: Pneumatic cleaning system (gas valve, tubing, pressure sensor) and AI Vision detection (Pi Camera, FPC cable).</li>
          <li>Total cost for these stretch goal components: <strong>${totalSpent.toFixed(2)}</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default Budget

