
const MasterPrice = () => {
    return (
        <div>
            <h3 className="text-xl font-bold border-b-2 md:px-20">Master Price </h3>

            <div className="md:px-20">

                {/* top section  */}
                <div className="flex justify-center border-b border-blue-300 py-5">
                    <button className="border-black border px-4 font-bold text-sm p-1">Round Trip</button>
                    <button className="border-black bg-blue-900 text-white border px-4 font-bold text-sm p-1 ">One Way</button>
                    <button className="border-black btn border px-4 font-bold text-sm p-1">Multi City</button>
                </div>

                {/* Search Section  */}
                <div>
                    <div className="grid md:grid-cols-7 gap-2 mx-auto ">

                        <select className="rounded  border-2 bg-white px-2 py-1">
                            <option defaultValue={"LHR"} disabled> Seletect</option>
                            <option value="LHR">LHR</option>
                            <option value="Exam1">Exam1</option>
                            <option value="Exam2">Exam2</option>
                            <option value="Exam3">Exam3</option>
                        </select>
                        <select className="rounded appearance-none border-2 bg-white px-2 py-1">
                            <option defaultValue={"CDG"} disabled>Seletect</option>
                            <option value="CDG">CDG</option>
                            <option value="Exam1">Exam1</option>
                            <option value="Exam2">Exam2</option>
                            <option value="Exam3">Exam3</option>
                        </select>

                        <input className="border-2  px-2 py-1" type="date" name="Date" id="" />

                        <select className="rounded border-2 bg-white px-2 py-1">
                            <option value="">Day-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <select className="rounded border-2 bg-white px-2 py-1">
                            <option value="">Day+</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <select className=" rounded border-2 bg-white px-2 py-1">
                            <option value=""> Any time</option>
                            <option value="10am">10am</option>
                            <option value="11am">11am</option>
                            <option value="12pm">12pm</option>
                        </select>

                        <select className=" rounded border-2 bg-white px-2 py-1">
                            <option>ADT</option>
                            <option value="option1">1</option>
                            <option value="option2">2</option>
                            <option value="option2">3</option>
                            <option value="option3">4</option>
                        </select>




                    </div>
                </div>
            </div>


        </div >
    );
};

export default MasterPrice;