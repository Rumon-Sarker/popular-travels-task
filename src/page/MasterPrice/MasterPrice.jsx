
const MasterPrice = () => {

    const handaleFormSubit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = {
            lhr: form.lhr.value,
            cdg: form.cdg.value,
            date: form.date.value,
            fDay: form.fDay.value,
            tDay: form.tDay.value,
            time: form.time.value,
            adt: form.adt.value,
            sit: form.sit.value,
            radio: form.radio.value

        }
        console.log("data", formData)
    }

    return (
        <div>
            <h3 className="text-xl font-bold border-b-2 md:px-20">Master Price </h3>

            <div className="md:px-20">

                {/* top section  */}
                <div className="flex justify-center border-b border-blue-300 py-5 ">
                    <button className="border-black border px-4 font-bold text-sm p-1">Round Trip</button>
                    <button className="border-black bg-blue-900 text-white  border px-4 font-bold text-sm p-1 ">One Way</button>
                    <button className="border-black btn border px-4 font-bold text-sm p-1">Multi City</button>
                </div>

                {/* Search Section  */}
                <form onSubmit={handaleFormSubit}>
                    <div className="grid md:grid-cols-8 gap-2 mx-10 md:mx-auto border-b border-blue-300 py-2 ">

                        <select name="lhr" className="rounded appearance-none border-2 bg-white px-2 py-1">
                            <option >LHR</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="dubia">Dubia</option>
                            <option value="dubia">Chattogram</option>
                        </select>
                        <select name="cdg" className="rounded appearance-none border-2 bg-white px-2 py-1">
                            <option >CDG</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="dubia">Chattogram</option>
                        </select>

                        <input className="border-2  px-2 py-1" type="date" name="date" id="" />

                        <select name="fDay" className="rounded border-2 bg-white  px-2 py-1">
                            <option value="">Day-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <select name="tDay" className="rounded border-2 bg-white px-2 py-1">
                            <option value="">Day+</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <select name="time" className=" rounded border-2 bg-white px-2 py-1">
                            <option value="">Any time</option>
                            <option value="10am">10am</option>
                            <option value="11am">11am</option>
                            <option value="12pm">12pm</option>
                        </select>

                        <select name="adt" className=" rounded border-2 bg-white px-2 py-1">
                            <option>ADT</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <select name="sit" className=" rounded border-2 bg-white px-2 pt-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="md:flex font-bold mx-10 md:mx-auto items-center space-y-3 justify-between border-b border-blue-300 pb-2  ">
                        <div><input type="checkbox" className="mr-2" />Extra Options</div>
                        <div className="flex items-center gap-3">
                            Environment
                            <input type="radio" name="radio" checked />Dummy
                            <input type="radio" name="radio" />DDT
                        </div>
                        <button type="submit" className="bg-blue-900 md:w-32 w-full p-2 text-white font-bold">Search</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default MasterPrice;