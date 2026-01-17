import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const DeliveryPriceTooltip = () => {
  return (
    <div className="capitalize font-bold text-black/50 cursor-pointer inline-block">
      <span data-tooltip-id="price-tooltip">parcel delivery price</span>

      <Tooltip
        id="price-tooltip"
        place="top"
        render={() => (
          <div className="text-sm">
            <table className="border border-collapse">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Parcel Type</th>
                  <th className="border px-2 py-1">Weight</th>
                  <th className="border px-2 py-1">Within City</th>
                  <th className="border px-2 py-1">Outside City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">Document</td>
                  <td className="border px-2 py-1">Any</td>
                  <td className="border px-2 py-1">৳60</td>
                  <td className="border px-2 py-1">৳80</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Non-Document</td>
                  <td className="border px-2 py-1">Up to 3kg</td>
                  <td className="border px-2 py-1">৳110</td>
                  <td className="border px-2 py-1">৳150</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Non-Document</td>
                  <td className="border px-2 py-1">&gt; 3kg</td>
                  <td className="border px-2 py-1">+৳40/kg</td>
                  <td className="border px-2 py-1">+৳40/kg +৳40 extra</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      />
    </div>
  );
};

export default DeliveryPriceTooltip;
