import PropTypes from 'prop-types';
const MasterPriceCard = ({ items, titleDatas }) => {
    return (
        <div className='md:px-20'>
            <h1>{items?.message}</h1>

            <div className='overflow-x-auto'>
                <table className="w-full bg-white shadow-md rounded my-6 ">
                    <thead>
                        <tr className="bg-gray-200">
                            {/* title data object in to dynamic */}
                            {
                                titleDatas?.map((data, index) => (
                                    <th key={index} className="border px-4 py-2">{data?.title}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {/* all data maping and show  */}
                        {
                            items?.flightOffer.map((flightOfferData, index) =>
                                <tr key={index} className="text-center bg-gray-50  ">

                                    {/* FLIGHT DATA  */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.itineraries.map((itinerariesDatas, index) => (
                                        <h1 key={index}>{itinerariesDatas?.segments.map((segmentsData, index) => (
                                            <div key={index} className='flex gap-1'>
                                                <p>{segmentsData?.carrierCode}</p>
                                                <h1>{segmentsData?.aircraft}</h1>
                                            </div>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>

                                    {/* AIRCRAFT  */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.itineraries.map((itinerariesDatas, index) => (
                                        <h1 key={index}>{itinerariesDatas?.segments.map((segmentsData, index) => (
                                            <p key={index}>
                                                {segmentsData?.flightNumber}
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>

                                    {/* SET DATA  */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.seat.map((seatDatas, index) => (
                                        <h1 key={index}>{seatDatas.map((seatData, index) => (
                                            <p key={index}>
                                                {seatData}
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>
                                    {/* CLASS DATA  */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.class.map((classDatas, index) => (
                                        <h1 key={index}>{classDatas.map((classData, index) => (
                                            <p key={index}>
                                                {classData}
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>
                                    {/* FARE DATA */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.fareBasis.map((fareBasisDatas, index) => (
                                        <h1 key={index}>{fareBasisDatas.map((fareBasisData, index) => (
                                            <p key={index}>
                                                {fareBasisData}
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>

                                    {/* ROUTE DATA */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.itineraries.map((itinerariesDatas, index) => (
                                        <h1 key={index}>{itinerariesDatas?.segments.map((segmentsData, index) => (
                                            <p key={index} className='flex'>
                                                <h3>{segmentsData?.departure?.iataCode}</h3>-<h2>{segmentsData?.arrival?.iataCode}</h2>
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>

                                    {/* DEPARTURE DATA  */}

                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.itineraries.map((itinerariesDatas, index) => (
                                        <h1 key={index}>{itinerariesDatas?.segments.map((segmentsData, index) => (
                                            <p key={index}>
                                                {segmentsData?.departure?.at}
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>
                                    {/* ARRIVAL DATA */}
                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.itineraries.map((itinerariesDatas, index) => (
                                        <h1 key={index}>{itinerariesDatas?.segments.map((segmentsData, index) => (
                                            <p key={index}>
                                                {segmentsData?.arrival?.at}
                                            </p>
                                        ))}
                                        </h1>
                                    ))}
                                    </td>

                                    {/* DURATION DATA  */}

                                    <td className='border-b border-red-200 px-4 py-2'>{flightOfferData?.itineraries.map((itinerariesData, index) => (
                                        <h1 key={index} className='flex'>{itinerariesData?.duration}</h1>
                                    ))}
                                    </td>

                                    {/* PRICE DATA  */}
                                    <td className='border-b border-red-200 px-4 py-2'>
                                        <p>{flightOfferData?.price}</p>
                                        <button className='bg-blue-900 text-white px-3 p-2 rounded-md text-xs font-bold'>SELECT</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

// props validations 
MasterPriceCard.propTypes = {
    items: PropTypes.object.isRequired,
    titleDatas: PropTypes.object.isRequired
}
export default MasterPriceCard;