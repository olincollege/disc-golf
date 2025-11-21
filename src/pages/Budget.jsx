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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Project Economics</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Bill of Materials (BOM)
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg mb-12 text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Component costs for core features and stretch goals including pneumatic cleaning and AI vision detection.
        </p>
      </div>

      <div className="overflow-hidden shadow-lg rounded-lg border border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Component
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Unit Cost
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Total Cost
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-200">
              {bomItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F8F4]'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
                    {item.component}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                    {item.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 text-center">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 text-right">
                    ${item.unitCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-stone-900 text-right">
                    ${item.totalCost.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-500 italic">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-stone-50 border-t border-stone-200">
              <tr>
                <td colSpan="4" className="px-6 py-4 text-base font-bold text-stone-900 text-right">
                  Total Project Cost:
                </td>
                <td className="px-6 py-4 text-base font-bold text-nobel-gold text-right">
                  ${totalSpent.toFixed(2)}
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Budget Notes */}
      <div className="mt-8 bg-[#F5F4F0] rounded-lg p-8 border-l-4 border-nobel-gold animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">
          Budget Notes
        </h2>
        <ul className="list-disc list-inside text-stone-600 space-y-2">
          <li>All prices are in USD and reflect actual purchase costs from Amazon and McMaster Carr.</li>
          <li>The <strong className="text-stone-800">Rotary Encoder</strong> is the only MVP core component shown - other core components (Raspberry Pi 5, Nema 23 motor, TB6600 driver, servo motor, chuck materials, enclosure) are not included in this list.</li>
          <li>The majority of components listed are for <strong className="text-stone-800">Stretch Goals</strong>: Pneumatic cleaning system (gas valve, tubing, pressure sensor) and AI Vision detection (Pi Camera, FPC cable).</li>
          <li>Total cost for these stretch goal components: <strong className="text-stone-800">${totalSpent.toFixed(2)}</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default Budget

